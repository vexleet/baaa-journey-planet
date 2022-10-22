import PropTypes from 'prop-types';
import './GoBackArrow.styles.css';

const GoBackArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} className="goto-box">
      <p>{'<'}</p>
    </div>
  );
};

GoBackArrow.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default GoBackArrow;
