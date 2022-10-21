import PropTypes from 'prop-types';
import './Chip.styles.css';

const Chip = ({ children, color }) => {
  return (
    <div className="chip" style={{ backgroundColor: color }}>
      {children}
    </div>
  );
};

Chip.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Chip;
