import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <Gallery className="gallery">
      {images.map(({ id, webformatURL, largeImageURL, tags }, index) => (
        <ImageGalleryItem
          key={`${id}-${index}`}
          id={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onImageClick={() => onImageClick(largeImageURL)}
        />
      ))}
    </Gallery>
  );
};
