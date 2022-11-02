import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import firebase from '@/firebase.js';
import { getPin } from '@/services/pins.js';

const path = 'pingboards';

/*
 * OBJECT SHOULD LOOK LIKE THAT:
 *
 * {
 *   name: string
 *
 *   pins: string[]
 *
 *   privacy: private
 *
 *   createdBy: user id
 *
 *   collaborators WONT BE CREATED FOR FIRST VERSIONS
 * }
 */
export const addPingboard = async (data) => {
  const db = getFirestore(firebase);

  const pingboardsReference = collection(db, path);

  try {
    await addDoc(pingboardsReference, data);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getPingboards = async (user) => {
  const db = getFirestore(firebase);

  const pingboardsReference = collection(db, path);
  const userPingboardsQuery = query(pingboardsReference, where('createdBy', '==', user.uid));

  try {
    const response = await getDocs(userPingboardsQuery);

    const responseData = [];

    for (const doc of response.docs) {
      const docData = doc.data();

      const pins = [];

      for (const pin of docData.pins) {
        const pinData = await getPin(pin);

        pins.push(pinData);
      }

      responseData.push({ ...docData, pins, id: doc.id });
    }

    return responseData;
  } catch (e) {
    console.log(e);
    return false;
  }
};
