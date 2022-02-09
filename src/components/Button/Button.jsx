import style from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ handleLoadMore }) => {
  return (
    <button onClick={handleLoadMore} type="button" className={style.Button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};

export default Button;
