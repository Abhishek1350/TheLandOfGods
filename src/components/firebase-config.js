// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY_KY_j2jRD3T5cB9lUOKfJVRWOzODBCQ",
  authDomain: "the-land-of-gods.firebaseapp.com",
  projectId: "the-land-of-gods",
  storageBucket: "the-land-of-gods.appspot.com",
  messagingSenderId: "53249785240",
  appId: "1:53249785240:web:ae76bac21408bbac2cffed",
  measurementId: "G-YS298VVCZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
