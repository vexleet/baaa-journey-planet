import { collection, doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import firebase from '@/src/firebase.js';

export const getCategories = async () => {
  const db = getFirestore(firebase);

  const categoriesRef = collection(db, 'categories');

  const collectionsDocument = await doc(categoriesRef, '1kYgvGtcIafeb2xES6J1');
  const collectionDocumentSnapshot = await getDoc(collectionsDocument);

  return collectionDocumentSnapshot.data();
};

export const getUserCategory = async (currentUser) => {
  const db = getFirestore(firebase);

  const userCategoryReference = doc(db, 'user-categories', currentUser.uid);

  console.log(userCategoryReference);
};

export const addCategories = async (data, currentUser) => {
  const db = getFirestore(firebase);

  const userCategoryReference = doc(db, 'user-categories', currentUser.uid);

  try {
    const addDocRef = await setDoc(userCategoryReference, data);

    console.log(addDocRef);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
