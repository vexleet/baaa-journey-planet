import PropTypes from 'prop-types';
import './index.styles.css';

const SmallCard = ({ image, subtitle, title }) => {
  return (
    <div className="small-pin">
      <img className="small-pin-image" src={image} />
      <p className="small-pin-title">{title}</p>
      {subtitle && <p className="small-pin-subtitle">{subtitle}</p>}
    </div>
  );
};

SmallCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default SmallCard;
