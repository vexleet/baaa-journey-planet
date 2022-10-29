import TextField from '@/components/TextField/TextField.jsx';
import { useState } from 'react';
import { addPingboard } from '@/services/pingboards.js';
import { useTokenContext } from '@/context/TokenContext.jsx';
import { toast } from 'react-toastify';
import Toggler from '@/components/Toggler/index.jsx';
import PropTypes from 'prop-types';
import PopupDialog from '@/components/PopupDialog/index.jsx';

const CreatePingboard = ({ isVisible, setIsVisible }) => {
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
      <div>
        <div onClick={closeDialog}>x</div>
        <p>Create new board</p>
      </div>

      <TextField
        id="pingboard-name"
        value={pingboardName}
        onChange={(e) => setPingboardName(e.target.value)}
        label="Give a name"
      />

      <p>Privacy</p>

      <Toggler items={['Public', 'Private']} setActiveItem={setPrivacy} activeItem={privacy} />

      <button onClick={createPingboard}>Create</button>
    </PopupDialog>
  );
};

CreatePingboard.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired
};

export default CreatePingboard;
