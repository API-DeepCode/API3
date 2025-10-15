// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics} from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1mgp70rriiybQ9uVrhsrRehzhReH18jI",
  authDomain: "api3-deepcode.firebaseapp.com",
  projectId: "api3-deepcode",
  storageBucket: "api3-deepcode.firebasestorage.app",
  messagingSenderId: "306333446185",
  appId: "1:306333446185:web:27b629cbb3ba32fb3cec38",
  measurementId: "G-4LYWHE6XZT"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, db, analytics, firebaseConfig };