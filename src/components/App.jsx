import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageModal from './ImageModal/ImageModal';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchImages } from '../assets/fetchImages';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchImages({ query, page });
        setImages(prev => [...prev, ...data]);
      } catch (error) {
        setIsError(true);
        toast.error('Unfortunately your request have failed');
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

  return (
    <>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <main>
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}
        <LoadMoreBtn />
        <ImageModal />
      </main>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;
