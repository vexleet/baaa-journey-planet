import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavigationItem = ({ src, linkTo }) => {
  console.log(linkTo);
  return (
    <Link to={linkTo}>
      <img src={src} width="45" height="45" />
    </Link>
  );
};

NavigationItem.propTypes = {
  src: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired
};

export default NavigationItem;
