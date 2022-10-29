import PopupDialog from '@/components/PopupDialog/index.jsx';
import { useState } from 'react';
import TextField from '@/components/TextField/TextField.jsx';
// import DateRangePicker from '@wojtekmaj/react-daterange-picker/src/DateRangePicker';
import PropTypes from 'prop-types';

const CreateTrip = ({ isVisible, setIsVisible }) => {
  const [, setTripImage] = useState(null);
  const [tripCountry, setTripCountry] = useState('');
  const [tripCity, setTripCity] = useState('');

  // const [tripDate, setTripDate] = useState([new Date(), new Date()]);

  const handleImageUpload = (e) => {
    if (e.target.files.length !== 0) setTripImage(e.target.files[0]);
  };

  const closeDialog = () => {
    setIsVisible(false);
  };

  return (
    <PopupDialog isOpen={isVisible} onClickOutside={closeDialog}>
      {/*CREATE COMPONENT*/}
      <div>
        <input type="file" id="files" name="files" accept="image/*" onChange={handleImageUpload} />
      </div>

      <TextField
        id="country"
        value={tripCountry}
        onChange={(e) => setTripCountry(e.target.value)}
        label="Target country"></TextField>
      <TextField
        id="city"
        value={tripCity}
        onChange={(e) => setTripCity(e.target.value)}
        label="Target city"></TextField>

      {/*<DateRangePicker value={tripDate} onChange={setTripDate} />*/}
    </PopupDialog>
  );
};

CreateTrip.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired
};

export default CreateTrip;
