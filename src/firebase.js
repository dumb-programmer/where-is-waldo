import { initializeApp } from "firebase/app";
import {
  getDatabase,
  onValue,
  ref,
  push,
  set,
  query,
  get,
} from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";

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

const signIn = () => {
  signInAnonymously(getAuth());
};

const getData = async () => {
  const db = getDatabase();
  const dbRef = ref(db);
  return new Promise((resolve, reject) => {
    onValue(
      dbRef,
      (snapshot) => {
        resolve(snapshot.val()["characters"]);
      },
      (error) => reject(console.log(error))
    );
  });
};

const submitData = (data) => {
  const db = getDatabase();
  const leaderboardRef = ref(db, "leaderboard/");
  set(push(leaderboardRef), {
    name: `${data.name}`,
    time: data.time,
    counter: `${data.counter.hr}:${data.counter.min}:${data.counter.sec}.${data.counter.msec}`,
  });
};

const getLeaderboard = () => {
  const db = getDatabase();
  const q = query(ref(db, "leaderboard"));
  return get(q);
};

export { initFirebase, signIn, getData, submitData, getLeaderboard };
