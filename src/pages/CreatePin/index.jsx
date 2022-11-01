import TextField from '@/components/TextField/TextField.jsx';
import { useState } from 'react';
import { addPin } from '@/services/pins.js';
import { toast } from 'react-toastify';
import { getImages } from '@/utils/getImages.js';
import CreatePopupLayout from '@/layouts/CreatePopupLayout/index.jsx';
import PropTypes from 'prop-types';
import ChoosePicture from '@/components/ChoosePicture/index.jsx';

const CreatePin = ({ isVisible, setIsVisible, handleSuccess }) => {
  const [pinName, setPinName] = useState('');
  const [pinLocation, setPinLocation] = useState('');
  const [pinDescription, setPinDescription] = useState('');

  const [pinImages, setPinImages] = useState([]);

  const createPin = async (e) => {
    e.preventDefault();

    const images = await getImages(pinImages);

    const response = await addPin({
      name: pinName,
      location: pinLocation,
      description: pinDescription,
      images,
      category: 'restaurant',
      coordinates: [56.162, 10.219],
      address: 'Aarhus, Denmark'
    });

    if (response) {
      toast('Successfully added a pin', { type: 'success' });
      handleSuccess();
      setIsVisible(false);
    } else {
      toast('Something went wrong with adding your pin! Try again.', { type: 'error' });
    }
  };

  return (
    <CreatePopupLayout title="Create new ping" isVisible={isVisible} setIsVisible={setIsVisible}>
      <form onSubmit={createPin}>
        <div style={{ marginBottom: 30 }}>
          <ChoosePicture images={pinImages} handleImageChange={setPinImages} />
        </div>

        <TextField
          id="pinName"
          value={pinName}
          onChange={(e) => setPinName(e.target.value)}
          label="Give a Name"
        />

        <TextField
          id="location"
          value={pinLocation}
          onChange={(e) => setPinLocation(e.target.value)}
          label="Give Location"
        />

        <TextField
          id="pinDescription"
          value={pinDescription}
          onChange={(e) => setPinDescription(e.target.value)}
          label="Write short description"
          isTextArea
        />

        <button type="submit" className="primary-button">
          Submit
        </button>
      </form>
    </CreatePopupLayout>
  );
};

CreatePin.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
  handleSuccess: PropTypes.func
};

export default CreatePin;
