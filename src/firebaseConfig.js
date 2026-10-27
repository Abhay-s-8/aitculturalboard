// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "aitculturalboard-2026.firebaseapp.com",
  projectId: "aitculturalboard-2026",
  storageBucket: "aitculturalboard-2026.appspot.com",
  messagingSenderId: "175222916233",
  appId: "1:175222916233:web:160eb28e68cc7f2805b258",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
