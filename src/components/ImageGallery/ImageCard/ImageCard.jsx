import s from './ImageCard.module.css';

const ImageCard = ({ image }) => {
  return (
    <div className={s.imageCard}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={s.galleryImage}
      />
    </div>
  );
};

export default ImageCard;
