// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "aitculturalboard-2026.firebaseapp.com",
  projectId: "aitculturalboard-2026",
  storageBucket: "aitculturalboard-2026.appspot.com",
  messagingSenderId: "175222916233",
  appId: "1:175222916233:web:160eb28e68cc7f2805b258",
};
console.log("KEY:", process.env.REACT_APP_FIREBASE_API_KEY);

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
