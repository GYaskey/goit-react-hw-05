import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageModal from './ImageModal/ImageModal';
import { useState } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  console.log(setIsLoading);
  return (
    <div>
      <SearchBar />
      <ImageGallery />
      {isLoading && <Loader />}
      <LoadMoreBtn />
      <ErrorMessage />
      <ImageModal />
    </div>
  );
};

export default App;
