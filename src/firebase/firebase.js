import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMaYg7iWuIybwJscb1Y7Nb-mD_h2lyzxA",
  authDomain: "test5-e85a1.firebaseapp.com",
  databaseURL: "https://test5-e85a1-default-rtdb.firebaseio.com",
  projectId: "test5-e85a1",
  storageBucket: "test5-e85a1.firebasestorage.app",
  messagingSenderId: "812596616673",
  appId: "1:812596616673:web:b306b1cf2670fc3d9f06a0",
  measurementId: "G-6WP8PQLJZV",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
