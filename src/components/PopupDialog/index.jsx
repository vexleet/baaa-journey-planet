import PropTypes from 'prop-types';
import './index.styles.css';
import { createPortal } from 'react-dom';

const PopupDialog = ({ children, className, isOpen, onClickOutside }) => {
  const hiddenClassName = () => {
    return isOpen ? '' : 'popup-dialog-hidden ';
  };

  const handleClickOutside = () => {
    if (onClickOutside) {
      onClickOutside();
    }
  };

  return createPortal(
    <div className={`${hiddenClassName()} popup-dialog ${className}`}>
      <div className="popup-dialog-background" onClick={handleClickOutside}></div>
      <div className="popup-dialog-content">{children}</div>
    </div>,
    document.body
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
