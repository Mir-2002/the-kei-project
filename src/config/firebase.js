// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzpZspoX3V1uoVw6kChXkVCWB-8hSrJTo",
  authDomain: "the-kei-project-3c1bd.firebaseapp.com",
  projectId: "the-kei-project-3c1bd",
  storageBucket: "the-kei-project-3c1bd.firebasestorage.app",
  messagingSenderId: "608243121528",
  appId: "1:608243121528:web:2310d2f83f5e49fcb8dc8d",
  measurementId: "G-8DRBDJV82C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export the Firestore database instance for use in other parts of your app

export { db };
