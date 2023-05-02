// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-VknTTQhjzEGF75ZSzsVXZ0xiSuM1u_Q",
  authDomain: "cook-s-corner.firebaseapp.com",
  projectId: "cook-s-corner",
  storageBucket: "cook-s-corner.appspot.com",
  messagingSenderId: "259068676796",
  appId: "1:259068676796:web:d18e6efebf78a11d41deb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;