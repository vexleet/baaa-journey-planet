import { collection, getFirestore, addDoc, getDocs, doc, getDoc } from 'firebase/firestore';
import firebase from '@/firebase.js';

export const addPin = async (data) => {
  const db = getFirestore(firebase);

  const pinsReference = collection(db, 'pins');

  try {
    await addDoc(pinsReference, data);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getPins = async () => {
  const db = getFirestore(firebase);

  const pinsReference = collection(db, 'pins');

  try {
    const response = await getDocs(pinsReference);

    return response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getPin = async (pinId) => {
  const db = getFirestore(firebase);

  const pinsReference = collection(db, 'pins');

  const pinDocument = await doc(pinsReference, pinId);
  const pinDocumentSnapshot = await getDoc(pinDocument);

  return pinDocumentSnapshot.data();
};
