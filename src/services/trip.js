import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import firebase from '@/src/firebase.js';

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
