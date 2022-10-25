import { collection, getFirestore, addDoc, getDocs } from 'firebase/firestore';
import firebase from '@/firebase.js';

export const addPing = async (data) => {
  const db = getFirestore(firebase);

  const pingsReference = collection(db, 'pings');

  try {
    await addDoc(pingsReference, data);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getPings = async () => {
  const db = getFirestore(firebase);

  const pingsReference = collection(db, 'pings');

  try {
    const response = await getDocs(pingsReference);

    return response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (e) {
    console.log(e);
    return false;
  }
};
