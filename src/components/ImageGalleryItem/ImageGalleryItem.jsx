export const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  onImageClick,
  tags,
}) => {
  return (
    <li key={id}>
      <div onClick={() => onImageClick(largeImageURL)}>
        <img src={webformatURL} alt={tags} />
      </div>
    </li>
  );
};
