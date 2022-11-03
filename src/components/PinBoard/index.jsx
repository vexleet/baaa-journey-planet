import './index.styles.css';
import PropTypes from 'prop-types';

const PinBoard = ({ pins, title }) => {
  return (
    <div className="pin-board-wrapper">
      {pins.map((pin) => (
        <img key={pin.id} src={pin.images[0]} />
      ))}

      <p className="board-title">{title}</p>
    </div>
  );
};

PinBoard.propTypes = {
  pins: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default PinBoard;
