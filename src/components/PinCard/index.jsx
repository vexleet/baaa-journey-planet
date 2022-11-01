import './index.styles.css';
import PropTypes from 'prop-types';

const PinCard = ({ name, location, image }) => {
  return (
    <div className="pin-card-wrapper">
      <img className="pin-image" src={image} />
      <div className="pin-name-box">
        <p className="pin-name">{name}</p>
        <p className="pin-location">{location}</p>
      </div>
    </div>
  );
};

PinCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

export default PinCard;
