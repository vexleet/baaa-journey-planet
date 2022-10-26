import './index.styles.css';
import PropTypes from 'prop-types';

const PinCard = ({ name, locaiton, image }) => {
  return (
    <div className="pin-card-wrapper">
      <img className="pin-image" src={image} />

      <p className="pin-name">{name}</p>
      <p className="pin-location">{locaiton}</p>
    </div>
  );
};

PinCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  locaiton: PropTypes.string.isRequired
};

export default PinCard;
