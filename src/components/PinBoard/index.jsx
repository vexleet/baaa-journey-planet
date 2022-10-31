import './index.styles.css';
import PropTypes from 'prop-types';

const PinBoard = ({ images }) => {
  console.log('da', images);
  return (
    <div className="pin-board-wrapper">
      {images.map((image) => (
        <img key={image} src={image} />
      ))}
    </div>
  );
};

PinBoard.propTypes = {
  images: PropTypes.array.isRequired
};

export default PinBoard;
