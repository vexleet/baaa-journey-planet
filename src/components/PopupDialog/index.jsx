import PropTypes from 'prop-types';
import './index.styles.css';

const PopupDialog = ({ children, className, isOpen, onClickOutside }) => {
  const hiddenClassName = () => {
    return isOpen ? '' : 'popup-dialog-hidden ';
  };

  const handleClickOutside = () => {
    if (onClickOutside) {
      onClickOutside();
    }
  };

  return (
    <div className={`${hiddenClassName()} popup-dialog ${className}`}>
      <div className="popup-dialog-background" onClick={handleClickOutside}></div>
      <div className="popup-dialog-content">{children}</div>
    </div>
  );
};

PopupDialog.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClickOutside: PropTypes.func,
  isOpen: PropTypes.bool.isRequired
};

PopupDialog.defaultProps = {
  className: ''
};

export default PopupDialog;
