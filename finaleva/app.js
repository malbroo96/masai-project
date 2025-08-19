inmport { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";   

import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";

const emaillogin = document.getElementById("emaillogin");
const password = document.getElementById("password");
const emailsignup = document.getElementById("emailsignup");
const passwordsignup = document.getElementById("passwordsignup");
const logbtn = document.getElementById("logbtn");
const signbtn = document.getElementById("signbtn");