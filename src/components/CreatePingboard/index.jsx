import TextField from '@/components/TextField/TextField.jsx';
import { useState } from 'react';
import { addPingboard } from '@/services/pingboards.js';
import { useTokenContext } from '@/context/TokenContext.jsx';
import { toast } from 'react-toastify';
import Toggler from '@/components/Toggler/index.jsx';
import PropTypes from 'prop-types';
import CreatePopupLayout from '@/layouts/CreatePopupLayout/index.jsx';

const CreatePingboard = ({ isVisible, setIsVisible, handleSuccess }) => {
  const pingboardTogglerItems = ['Private', 'Public'];

  const { user } = useTokenContext();

  const [pingboardName, setPingboardName] = useState('');
  const [privacy, setPrivacy] = useState(pingboardTogglerItems[0]);

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

  return (
    <CreatePopupLayout setIsVisible={setIsVisible} isVisible={isVisible} title="Create new board">
      <div style={{ marginBottom: 30 }}>
        <TextField
          id="pingboard-name"
          value={pingboardName}
          onChange={(e) => setPingboardName(e.target.value)}
          label="Give a name"
        />
      </div>

      <Toggler
        items={pingboardTogglerItems}
        setActiveItem={setPrivacy}
        activeItem={privacy}
        label="Privacy"
      />

      <button className="primary-button" onClick={createPingboard}>
        Create
      </button>
    </CreatePopupLayout>
  );
};

CreatePingboard.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
  handleSuccess: PropTypes.func
};

export default CreatePingboard;
