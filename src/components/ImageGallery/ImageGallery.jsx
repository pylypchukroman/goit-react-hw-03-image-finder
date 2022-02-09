import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import style from './ImageGallery.module.css';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={style.ImageGallery}>
      <ImageGalleryItem images={images} onClick={onClick} />
    </ul>
  );
};

export default ImageGallery;
