import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './GoBackArrow.styles.css';

const GoBackArrow = ({ goTo }) => {
  return (
    <Link to={goTo} className="goto-link">
      <div className="goto-box">
        <p>{'<'}</p>
      </div>
    </Link>
  );
};

GoBackArrow.propTypes = {
  goTo: PropTypes.string.isRequired
};

export default GoBackArrow;
