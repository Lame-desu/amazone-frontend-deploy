// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu2SxLaqAC6GlDeThtthOQs8ZWbQcY1bk",
  authDomain: "e-clone-868fa.firebaseapp.com",
  projectId: "e-clone-868fa",
  storageBucket: "e-clone-868fa.firebasestorage.app",
  messagingSenderId: "641977427878",
  appId: "1:641977427878:web:c4dbfe9553d1493f3ed167",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
