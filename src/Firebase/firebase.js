// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp2xhoYW1f38CrgfAiyPkNPO3cy5NfQLE",
  authDomain: "fir-login-edb91.firebaseapp.com",
  projectId: "fir-login-edb91",
  storageBucket: "fir-login-edb91.appspot.com",
  messagingSenderId: "115827249097",
  appId: "1:115827249097:web:58f66138d8b11427e7a218"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export default app;