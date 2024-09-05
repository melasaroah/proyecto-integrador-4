// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1UoJCy0AVWJ8EGUoBf1HrGqOjb2Fl76U",
  authDomain: "react-firebase-e3a44.firebaseapp.com",
  projectId: "react-firebase-e3a44",
  storageBucket: "react-firebase-e3a44.appspot.com",
  messagingSenderId: "942243241618",
  appId: "1:942243241618:web:4c004b939e28469a4a104b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);