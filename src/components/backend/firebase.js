// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCILcgh50BQaH6PJlMBkYwABSlA-E2sx50",
  authDomain: "proyecto-integrador-4-f3418.firebaseapp.com",
  projectId: "proyecto-integrador-4-f3418",
  storageBucket: "proyecto-integrador-4-f3418.appspot.com",
  messagingSenderId: "67979573233",
  appId: "1:67979573233:web:7f6cfdf2d9a2a377beb650"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
