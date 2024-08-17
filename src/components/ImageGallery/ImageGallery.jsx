import ImageCard from './ImageCard/ImageCard';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={s.gallery}>
      {images.map(image => (
        <li key={image.id} className={s.galleryItem}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
