// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyBYMtOMVzzDrfuhDuaVHLrZA_gTWnGSoRQ",
  authDomain: "shouters-academy.firebaseapp.com",
  projectId: "shouters-academy",
  storageBucket: "shouters-academy.firebasestorage.app",
  messagingSenderId: "217270248902",
  appId: "1:217270248902:web:e51a6542a1b0663c37bec7",
  measurementId: "G-EZDDPK1C9W"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
