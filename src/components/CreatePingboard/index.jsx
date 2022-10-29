import TextField from '@/components/TextField/TextField.jsx';
import { useState } from 'react';
import { addPingboard } from '@/services/pingboards.js';
import { useTokenContext } from '@/context/TokenContext.jsx';
import { toast } from 'react-toastify';
import Toggler from '@/components/Toggler/index.jsx';
import PropTypes from 'prop-types';
import PopupDialog from '@/components/PopupDialog/index.jsx';
import './index.styles.css';

const CreatePingboard = ({ isVisible, setIsVisible, handleSuccess }) => {
  const { user } = useTokenContext();

  const [pingboardName, setPingboardName] = useState('');
  const [privacy, setPrivacy] = useState('Private');

  const createPingboard = () => {
    const createResponse = addPingboard({
      name: pingboardName,
      privacy,
      createdBy: user.uid,
      pins: []
    });

    if (createResponse) {
      toast('Successfully created a pingboard', { type: 'success' });
      handleSuccess();
      setIsVisible(false);
    } else {
      toast('Something went wrong with creating your pingboard. Try again', { type: 'error' });
    }
  };

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
          <p className="create-title">Create new board</p>
        </div>

        <div className="create-main">
          <div style={{ marginBottom: 30 }}>
            <TextField
              id="pingboard-name"
              value={pingboardName}
              onChange={(e) => setPingboardName(e.target.value)}
              label="Give a name"
            />
          </div>

          <Toggler
            items={['Public', 'Private']}
            setActiveItem={setPrivacy}
            activeItem={privacy}
            label="Privacy"
          />

          <button className="primary-button" onClick={createPingboard}>
            Create
          </button>
        </div>
      </div>
    </PopupDialog>
  );
};

CreatePingboard.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
  handleSuccess: PropTypes.func
};

export default CreatePingboard;
