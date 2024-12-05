import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCobWcukqH4miVDiIUcWqdTGMvgpFFXcXE",
  authDomain: "firemanapp-abde0.firebaseapp.com",
  projectId: "firemanapp-abde0",
  storageBucket: "firemanapp-abde0.firebasestorage.app",
  messagingSenderId: "277120060485",
  appId: "1:277120060485:web:c8873c5530d9b7fdcb272c",
  measurementId: "G-KDDJ35S3LT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);