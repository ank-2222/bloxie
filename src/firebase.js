// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxmVMNbWlURrGNAQKHGJb1gblMrYgDoG4",
  authDomain: "react-blog-d5554.firebaseapp.com",
  projectId: "react-blog-d5554",
  storageBucket: "react-blog-d5554.appspot.com",
  messagingSenderId: "707627341462",
  appId: "1:707627341462:web:a878e5c7eb461e4c3054b7",
  measurementId: "G-B7G1K78MZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
