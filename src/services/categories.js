import { collection, doc, getDoc, getFirestore } from 'firebase/firestore';
import firebase from '@/firebase.js';

export const getCategories = async () => {
  const db = getFirestore(firebase);

  const categoriesRef = collection(db, 'categories');

  const collectionsDocument = await doc(categoriesRef, '1kYgvGtcIafeb2xES6J1');
  const collectionDocumentSnapshot = await getDoc(collectionsDocument);

  return collectionDocumentSnapshot.data();
};
