import PopupDialog from '@/src/components/PopupDialog/index.jsx';
import './index.css';
import PropTypes from 'prop-types';

const CreatePopupLayout = ({ isVisible, children, title, setIsVisible }) => {
  const closeDialog = () => {
    setIsVisible(false);
  };

  return (
    <PopupDialog isOpen={isVisible} onClickOutside={closeDialog}>
      <div className="create-wrapper">
        <div className="create-header">
          <div className="create-close" onClick={closeDialog}>
            X
          </div>
          <p className="create-title">{title}</p>
        </div>

        <div className="create-main">{children}</div>
      </div>
    </PopupDialog>
  );
};

CreatePopupLayout.propTypes = {
  title: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default CreatePopupLayout;
