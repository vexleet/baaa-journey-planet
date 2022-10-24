import { collection, getFirestore, addDoc } from 'firebase/firestore';
import firebase from '@/firebase.js';

export const addPing = async (data) => {
  const db = getFirestore(firebase);

  const userCategoryReference = collection(db, 'pings');

  try {
    await addDoc(userCategoryReference, data);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
