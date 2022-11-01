import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import app from '@/src/firebase.js';

const storage = getStorage(app);

export const getImages = async (images) => {
  const imageUrls = [];

  for (let i = 0; i < images.length; i++) {
    let img = images.item(i);

    const path = `/images/${img.name}`;
    const storageRef = ref(storage, path);

    const snapshot = await uploadBytes(storageRef, img);

    const downloadUrl = await getDownloadURL(snapshot.ref);

    imageUrls.push(downloadUrl);
  }

  return imageUrls;
};
