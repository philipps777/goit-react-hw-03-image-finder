import { Li, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  onImageClick,
  tags,
}) => {
  return (
    <Li key={id}>
      <div onClick={() => onImageClick(largeImageURL)}>
        <Image src={webformatURL} alt={tags} />
      </div>
    </Li>
  );
};
