// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAMaYg7iWuIybwJscb1Y7Nb-mD_h2lyzxA",
//   authDomain: "test5-e85a1.firebaseapp.com",
//   databaseURL: "https://test5-e85a1-default-rtdb.firebaseio.com",
//   projectId: "test5-e85a1",
//   storageBucket: "test5-e85a1.firebasestorage.app",
//   messagingSenderId: "812596616673",
//   appId: "1:812596616673:web:b306b1cf2670fc3d9f06a0",
//   measurementId: "G-6WP8PQLJZV",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { app, auth };
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
