import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageModal from './ImageModal/ImageModal';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchImages } from '../assets/fetchImages';
import Modal from 'react-modal';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchImages({ query, page });
        if (data.results.length === 0) {
          toast.error('No images were found');
          setShowLoadMore(false);
        } else {
          setImages(prev => [...prev, ...data.results]);
          setShowLoadMore(page < data.total_pages);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleChangeQuery = newQuery => {
    setImages([]);
    setQuery(newQuery);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  const openModal = imageUrl => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <main>
        <ImageGallery images={images} onImageClick={openModal} />
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}
        {showLoadMore && images.length > 0 && (
          <LoadMoreBtn loadMore={loadMore} />
        )}
        <ImageModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          imageUrl={selectedImage}
        />
      </main>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;
