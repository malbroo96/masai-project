function fetchRecipeById(recipeId) {
  return fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
  )
    .then((res) => res.json())
    .then((data) => (data.meals ? data.meals[0] : null));
}

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const emaillogin = document.getElementById("emaillogin");
const password = document.getElementById("password");
const emailsignup = document.getElementById("emailsignup");
const passwordsignup = document.getElementById("passwordsignup");
const logbtn = document.getElementById("logbtn");
const signbtn = document.getElementById("signbtn");

logbtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emaillogin.value;
  const pass = password.value;

  if (!email || !pass) {
    alert("Please fill in all fields");
    return;
  }

  signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User logged in:", user);
      alert("Login successful");

      fetchRecipeById("52772")
        .then((recipe) => {
          if (recipe) {
            console.log("Fetched recipe:", recipe);
        
          } else {
            console.log("No recipe found.");
          }
        })
        .catch((err) => {
          console.error("Error fetching recipe:", err);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error logging in:", errorCode, errorMessage);
      alert("Login failed: " + errorMessage);
    });
});
