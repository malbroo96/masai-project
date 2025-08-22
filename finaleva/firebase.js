!// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCybzKdR-ViHnwXNcF5vukMAHygaRiH-js",
  authDomain: "evaluation-584ed.firebaseapp.com",
  databaseURL: "https://evaluation-584ed-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "evaluation-584ed",
  storageBucket: "evaluation-584ed.firebasestorage.app",
  messagingSenderId: "689926586258",
  appId: "1:689926586258:web:eb36b4f44a9b6f14764b4b",
  measurementId: "G-8GY4LXCSVC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);      
const db = getFirestore(app);
export { app, analytics, database, auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut };

