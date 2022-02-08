import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import style from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={style.ImageGallery}>
      <ImageGalleryItem images={images} />
    </ul>
  );
};

export default ImageGallery;
