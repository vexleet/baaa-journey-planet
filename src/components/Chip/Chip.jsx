import PropTypes from 'prop-types';
import './Chip.styles.css';

const Chip = ({ children, color, className }) => {
  return (
    <div className={'chip ' + className} style={{ backgroundColor: color }}>
      {children}
    </div>
  );
};

Chip.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Chip;
