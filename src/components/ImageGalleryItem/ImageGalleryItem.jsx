import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images, onClick }) =>
  images.map(({ id, webformatURL, tags, largeImageURL }) => (
    <li className={style.ImageGalleryItem} key={id}>
      <img
        src={webformatURL}
        alt={tags}
        className={style.ImageGalleryItem__image}
        onClick={() => {
          onClick(largeImageURL);
        }}
      />
    </li>
  ));

export default ImageGalleryItem;
