import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageModal from './ImageModal/ImageModal';
import { useState } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const handleChangeQuery = newQuery => {
    setImages([]);
    setQuery(newQuery);
    setPage(1);
  };

  return (
    <>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <main>
        <ImageGallery />
        {isLoading && <Loader />}
        <LoadMoreBtn />
        {isError && <ErrorMessage />}
        <ImageModal />
      </main>
    </>
  );
};

export default App;
