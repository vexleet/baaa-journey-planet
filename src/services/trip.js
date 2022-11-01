import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where
} from 'firebase/firestore';
import firebase from '@/firebase.js';
import { getPin } from './pins';

const path = 'trips';

export const addTrip = async (data) => {
  const db = getFirestore();

  const tripReference = collection(db, path);

  try {
    await addDoc(tripReference, data);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getTrips = async (user) => {
  const db = getFirestore(firebase);

  const tripsReference = collection(db, path);
  const userTripsQuery = query(tripsReference, where('createdBy', '==', user.uid));

  try {
    const response = await getDocs(userTripsQuery);

    const responseData = [];

    for (const doc of response.docs) {
      const docData = doc.data();

      responseData.push({ ...docData, id: doc.id });
    }

    return responseData;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getTrip = async (id) => {
  const db = getFirestore(firebase);

  const tripsReference = collection(db, path);
  const userTripsQuery = query(tripsReference, where('__name__', '==', id));

  try {
    const response = await getDocs(userTripsQuery);

    const result = response.docs[0].data();

    if (result.morning) {
      result.morningPins = [];
      for (const pin of result.morning) {
        result.morningPins.push(await getPin(pin));
      }
    }

    return result;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const addPinToTrip = async (tripId, pinId, type) => {
  const db = getFirestore();
  console.log(type);
  const tripReference = doc(db, path, tripId);

  try {
    await updateDoc(tripReference, { morning: [pinId] });

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
