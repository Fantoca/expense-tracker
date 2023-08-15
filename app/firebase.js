// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//  TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLzWNrX3Cfr27pgEtN5S_NIFf8usjN3NY",
  authDomain: "expense-tracker-963f8.firebaseapp.com",
  projectId: "expense-tracker-963f8",
  storageBucket: "expense-tracker-963f8.appspot.com",
  messagingSenderId: "158923098819",
  appId: "1:158923098819:web:b2a2a326145eead337b076",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
