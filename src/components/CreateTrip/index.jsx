import { useState } from 'react';
import TextField from '@/components/TextField/TextField.jsx';
import PropTypes from 'prop-types';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import './index.css';
import CreatePopupLayout from '@/layouts/CreatePopupLayout/index.jsx';
import { addTrip } from '@/services/trip.js';
import { getImages } from '@/utils/getImages.js';
import { toast } from 'react-toastify';
import { useTokenContext } from '@/context/TokenContext.jsx';
import ChoosePicture from '@/components/ChoosePicture/index.jsx';

const CreateTrip = ({ isVisible, setIsVisible, handleSuccess }) => {
  const { user } = useTokenContext();

  const [tripImage, setTripImage] = useState([]);
  const [tripCountry, setTripCountry] = useState('');
  const [tripCity, setTripCity] = useState('');
  const [tripName, setTripName] = useState('');

  const [tripDate, setTripDate] = useState([new Date(), new Date()]);

  const createTrip = async () => {
    const image = await getImages(tripImage);

    const createResponse = await addTrip({
      name: tripName,
      city: tripCity,
      country: tripCountry,
      startDate: tripDate[0].toLocaleDateString('de-DK'),
      endDate: tripDate[1].toLocaleDateString('de-DK'),
      image: image[0],
      createdBy: user.uid
    });

    if (createResponse) {
      toast('Successfully created a trip', { type: 'success' });
      handleSuccess();
      setIsVisible(false);
    } else {
      toast('Something went wrong with creating your trip. Try again', { type: 'error' });
    }
  };

  return (
    <CreatePopupLayout setIsVisible={setIsVisible} isVisible={isVisible} title="Create new trip">
      <ChoosePicture images={tripImage} handleImageChange={setTripImage} />

      <div style={{ marginBottom: 20, marginTop: 30 }}>
        <TextField
          id="name"
          value={tripName}
          onChange={(e) => setTripName(e.target.value)}
          label="Trip name"></TextField>
      </div>

      <div style={{ marginBottom: 20 }}>
        <TextField
          id="city"
          value={tripCountry}
          onChange={(e) => setTripCountry(e.target.value)}
          label="Target country"></TextField>
      </div>

      <div style={{ marginBottom: 20 }}>
        <TextField
          id="city"
          value={tripCity}
          onChange={(e) => setTripCity(e.target.value)}
          label="Target city"></TextField>
      </div>

      <DateRangePicker
        minDate={new Date()}
        className="calendar-styles"
        onChange={setTripDate}
        value={tripDate}
        locale="de-DK"
      />

      <button className="primary-button" onClick={createTrip}>
        Create
      </button>
    </CreatePopupLayout>
  );
};

CreateTrip.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
  handleSuccess: PropTypes.func
};

export default CreateTrip;
