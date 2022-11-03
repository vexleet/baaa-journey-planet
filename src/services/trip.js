/* eslint-disable indent */
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
import firebase from '@/src/firebase.js';
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
      result.afternoonPins = [];
      result.eveningPins = [];

      if (result.morning) {
        for (const pin of result.morning) {
          result.morningPins.push(await getPin(pin));
        }
      }

      if (result.afternoon) {
        for (const pin of result.afternoon) {
          result.afternoonPins.push(await getPin(pin));
        }
      }

      if (result.evening) {
        for (const pin of result.evening) {
          result.eveningPins.push(await getPin(pin));
        }
      }
    }

    return result;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const addPinToTrip = async (tripId, pinId, type, index, currentPins) => {
  const db = getFirestore();

  const tripReference = doc(db, path, tripId);

  currentPins = currentPins ? currentPins.map((x) => x.id) : [];
  currentPins.splice(index, 0, pinId);

  const postData =
    type === 'morning'
      ? { morning: currentPins }
      : type === 'afternoon'
      ? { afternoon: currentPins }
      : { evening: currentPins };
  console.log('daa', postData);
  try {
    await updateDoc(tripReference, postData);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
