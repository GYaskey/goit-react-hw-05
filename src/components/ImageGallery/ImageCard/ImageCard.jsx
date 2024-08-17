const ImageCard = ({ image }) => {
  return (
    <li>
      <img src={image.urls.small} alt={image.alt_description} width="300px" />
    </li>
  );
};

export default ImageCard;
