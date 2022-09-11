import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  push,
  set,
  query,
  get,
} from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};
const app = initializeApp(firebaseConfig);

signInAnonymously(getAuth(app));

const getData = async () => {
  const db = getDatabase(app);
  const q = query(ref(db, "characters"));
  return get(q);
};

const submitData = (data) => {
  const db = getDatabase(app);
  const leaderboardRef = ref(db, "leaderboard/");
  return set(push(leaderboardRef), {
    name: `${data.name}`,
    time: data.time,
    counter: data.counter,
  });
};

const getLeaderboard = () => {
  const db = getDatabase(app);
  const q = query(ref(db, "leaderboard"));
  return get(q);
};

export { getData, submitData, getLeaderboard };
