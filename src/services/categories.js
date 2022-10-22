import { collection, doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import firebase from '@/firebase.js';

export const getCategories = async () => {
  const db = getFirestore(firebase);

  const categoriesRef = collection(db, 'categories');

  const collectionsDocument = await doc(categoriesRef, '1kYgvGtcIafeb2xES6J1');
  const collectionDocumentSnapshot = await getDoc(collectionsDocument);

  return collectionDocumentSnapshot.data();
};

export const addCategories = async (data, currentUser) => {
  const db = getFirestore(firebase);

  // const categoriesRef = collection(db, 'user-categories');

  const docTest = doc(db, 'user-categories', currentUser.uid);

  try {
    const addDocRef = await setDoc(docTest, data);

    console.log(addDocRef);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
