// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv29XWAvqPkjt1BB8rdRBBssCMoyOetNI",
  authDomain: "simple-firebase-782c3.firebaseapp.com",
  projectId: "simple-firebase-782c3",
  storageBucket: "simple-firebase-782c3.appspot.com",
  messagingSenderId: "900783296399",
  appId: "1:900783296399:web:3bd18341c1bb03eae005fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app