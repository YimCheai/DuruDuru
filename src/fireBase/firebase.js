// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVpp_J_rTWYey0bf5U3bCAE4uZJ_97AD8",
  authDomain: "duruduru-4f26b.firebaseapp.com",
  projectId: "duruduru-4f26b",
  storageBucket: "duruduru-4f26b.firebasestorage.app",
  messagingSenderId: "712899977901",
  appId: "1:712899977901:web:ccf11d9c044ac4a23a9c24",
  measurementId: "G-X8CRKB5YRN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
