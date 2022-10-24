import TextField from '@/components/TextField/TextField.jsx';
import GoBackArrow from '@/components/GoBackArrow/GoBackArrow.jsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addPing } from '@/services/ping.js';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import app from '@/firebase.js';
import { toast } from 'react-toastify';

const CreatePing = () => {
  const navigate = useNavigate();

  const storage = getStorage(app);

  const [pingName, setPingName] = useState('');
  const [pingLocation, setPingLocation] = useState('');
  const [pingDescription, setPingDescription] = useState('');

  const [pingImages, setPingImages] = useState(null);

  const handleImageUpload = (e) => {
    if (e.target.files.length !== 0) setPingImages(e.target.files);
  };

  const getImages = async () => {
    const imageUrls = [];

    for (let i = 0; i < pingImages.length; i++) {
      let img = pingImages.item(i);

      const path = `/images/${img.name}`;
      const storageRef = ref(storage, path);

      const snapshot = await uploadBytes(storageRef, img);

      const downloadUrl = await getDownloadURL(snapshot.ref);

      imageUrls.push(downloadUrl);
    }

    return imageUrls;
  };

  const createPing = async (e) => {
    e.preventDefault();

    const images = await getImages();

    const response = await addPing({ pingName, pingLocation, pingDescription, images });

    if (response) {
      toast('Successfully added a ping', { type: 'success' });
      navigate('/');
    } else {
      toast('Something went wrong with adding your ping! Try again.', { type: 'error' });
    }
  };

  return (
    <div style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 40 }}>
      <GoBackArrow onClick={() => navigate('/')} />
      <h2 style={{ fontSize: 30, marginBottom: 20, marginTop: 10 }}>Create a ping</h2>

      <form onSubmit={createPing}>
        <TextField
          id="pingName"
          value={pingName}
          onChange={(e) => setPingName(e.target.value)}
          label="Ping Name"
        />
        <TextField
          id="location"
          value={pingLocation}
          onChange={(e) => setPingLocation(e.target.value)}
          label="Ping Location"
        />
        <TextField
          id="pingDescription"
          value={pingDescription}
          onChange={(e) => setPingDescription(e.target.value)}
          label="Ping Description"
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

export default CreatePing;
