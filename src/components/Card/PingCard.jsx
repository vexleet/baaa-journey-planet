import './PingCard.styles.css';
import PropTypes from 'prop-types';

const PingCard = ({ name, locaiton, image }) => {
  return (
    <div className="ping-card-wrapper">
      <img className="ping-image" src={image} />

      <p className="ping-name">{name}</p>
      <p className="ping-location">{locaiton}</p>
    </div>
  );
};

PingCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  locaiton: PropTypes.string.isRequired
};

export default PingCard;
