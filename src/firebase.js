// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUoHKNPAweEm9f9TJxU0ZnuB3C6MshmYo",
  authDomain: "jul-4746f.firebaseapp.com",
  projectId: "jul-4746f",
  storageBucket: "jul-4746f.appspot.com",
  messagingSenderId: "219245691167",
  appId: "1:219245691167:web:bb607e759e6308ba6bf02a",
  measurementId: "G-BKFCKPWVK2"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
// https://jul-4746f.web.app
