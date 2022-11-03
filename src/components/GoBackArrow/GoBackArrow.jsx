import PropTypes from 'prop-types';
import './GoBackArrow.styles.css';

const GoBackArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} className="goto-box">
      <img className="back" src="/icons/back.svg" alt="Go Back Icon" />
    </div>
  );
};

GoBackArrow.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default GoBackArrow;
