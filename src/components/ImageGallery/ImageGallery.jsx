import { ImageGalleryItem } from './ImageGalleryItem';
import { Gallery, GalleryItem } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => (
  <Gallery>
    {images.map(({ id, webformatURL, tags, ...otherPrprs }) => (
      <GalleryItem key={id}>
        <ImageGalleryItem src={webformatURL} alt={tags} {...otherPrprs} />
      </GalleryItem>
    ))}
  </Gallery>
);
