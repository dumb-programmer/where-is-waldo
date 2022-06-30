import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";

const initFirebase = () => {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  };
  initializeApp(firebaseConfig);
};

const getData = async () => {
  const db = getDatabase();
  const dbRef = ref(db);
  return new Promise((resolve, reject) => {
    onValue(
      dbRef,
      (snapshot) => {
        resolve(snapshot.val());
      },
      (error) => reject(console.log(error))
    );
  });
};

export { initFirebase, getData };
