import PropTypes from 'prop-types';
import './index.styles.css';

const SmallPinCard = ({ image, subtitle, title }) => {
  return (
    <div className="small-pin">
      <img className="small-pin-image" src={image} />
      <p className="small-pin-title">{title}</p>
      {subtitle && <p className="small-pin-subtitle">{subtitle}</p>}
    </div>
  );
};

SmallPinCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
  // pin: PropTypes.shape({
  //   name: PropTypes.string,
  //   location: PropTypes.string,
  //   category: PropTypes.string,
  //   description: PropTypes.string,
  //   coordinates: PropTypes.arrayOf(PropTypes.number),
  //   address: PropTypes.string,
  //   images: PropTypes.arrayOf(PropTypes.string)
  // })
};

export default SmallPinCard;
