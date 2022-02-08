import style from './Button.module.css';

const Button = ({ handleLoadMore }) => {
  return (
    <button onClick={handleLoadMore} type="button" className={style.Button}>
      Load more
    </button>
  );
};

export default Button;
