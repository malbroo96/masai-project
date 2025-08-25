// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

import config from "../../config.js";
const firebaseConfig = config.firebaseConfig;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Use Firestore instead of Realtime Database

// =================
// Register Function
// =================
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("User registered:", userCredential.user);
      const user = userCredential.user;
      console.log("User registered:", user);

      // Save extra data to Firestore
      setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
      });

      alert("User Registered & Data Saved!");
    })
    .catch((error) => {
      alert(error.message);
    });
});

// ==============
// Login Function
// ==============
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login Successful!");
      console.log("Logged in user:", userCredential.user);
    })
    .catch((error) => {
      alert(error.message);
    });
});

// ===================
// Toggle UI (Login/Register)
// ===================
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginBtn.addEventListener("click", () => {
  loginBtn.classList.add("active");
  registerBtn.classList.remove("active");
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
});

registerBtn.addEventListener("click", () => {
  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
});
