import toast, { Toaster } from 'react-hot-toast';
import { fetchImages } from '../../assets/fetchImages';
import ImageCard from './ImageCard/ImageCard';
import { useEffect, useState } from 'react';

const ImageGallery = () => {
  return (
    <div>
      <ul>
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </ul>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default ImageGallery;
