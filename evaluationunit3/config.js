// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCybzKdR-ViHnwXNcF5vukMAHygaRiH-js",
  authDomain: "evaluation-584ed.firebaseapp.com",
  projectId: "evaluation-584ed",
  storageBucket: "evaluation-584ed.firebasestorage.app",
  messagingSenderId: "689926586258",
  appId: "1:689926586258:web:e8b87d594c13ad16764b4b",
  measurementId: "G-ZXLGHZ3FSR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);


function appendData(path, data) {
  return push(ref(database, path), data)
    .then(() => {
      console.log("Data appended successfully!");
    })
    .catch((error) => {
      console.error("Error appending data:", error);
    });
}

export { app, analytics, database, appendData };
