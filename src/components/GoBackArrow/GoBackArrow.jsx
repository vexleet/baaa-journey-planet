import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GoBackArrow = ({ goTo }) => {
  return (
    <Link to={goTo}>
      <div>
        <p>{'<'}</p>
      </div>
    </Link>
  );
};

GoBackArrow.propTypes = {
  goTo: PropTypes.string.isRequired
};

export default GoBackArrow;
