import TextField from '@/components/TextField/TextField.jsx';
import GoBackArrow from '@/components/GoBackArrow/GoBackArrow.jsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addPin } from '@/services/pins.js';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import app from '@/firebase.js';
import { toast } from 'react-toastify';

const CreatePin = () => {
  const navigate = useNavigate();

  const storage = getStorage(app);

  const [pinName, setPinName] = useState('');
  const [pinLocation, setPinLocation] = useState('');
  const [pinDescription, setPinDescription] = useState('');

  const [pinImages, setPinImages] = useState(null);

  const handleImageUpload = (e) => {
    if (e.target.files.length !== 0) setPinImages(e.target.files);
  };

  const getImages = async () => {
    const imageUrls = [];

    for (let i = 0; i < pinImages.length; i++) {
      let img = pinImages.item(i);

      const path = `/images/${img.name}`;
      const storageRef = ref(storage, path);

      const snapshot = await uploadBytes(storageRef, img);

      const downloadUrl = await getDownloadURL(snapshot.ref);

      imageUrls.push(downloadUrl);
    }

    return imageUrls;
  };

  const createPin = async (e) => {
    e.preventDefault();

    const images = await getImages();

    const response = await addPin({
      pinName: pinName,
      pinLocation: pinLocation,
      pinDescription: pinDescription,
      images
    });

    if (response) {
      toast('Successfully added a pin', { type: 'success' });
      navigate('/');
    } else {
      toast('Something went wrong with adding your pin! Try again.', { type: 'error' });
    }
  };

  return (
    <div style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 40 }}>
      <GoBackArrow onClick={() => navigate('/')} />
      <h2 style={{ fontSize: 30, marginBottom: 20, marginTop: 10 }}>Create a pin</h2>

      <form onSubmit={createPin}>
        <TextField
          id="pinName"
          value={pinName}
          onChange={(e) => setPinName(e.target.value)}
          label="Pin Name"
        />
        <TextField
          id="location"
          value={pinLocation}
          onChange={(e) => setPinLocation(e.target.value)}
          label="Pin Location"
        />
        <TextField
          id="pinDescription"
          value={pinDescription}
          onChange={(e) => setPinDescription(e.target.value)}
          label="Pin Description"
          isTextArea
        />

        <div>
          <input
            type="file"
            id="files"
            name="files"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>

        <button
          type="submit"
          style={{
            textAlign: 'center',
            marginTop: 10,
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block'
          }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePin;
