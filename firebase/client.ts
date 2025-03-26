// Import the functions you need from the SDKs you need
import { getApps, initializeApp, getApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvrHqSbhXKC5Gzx3uVdiYV8egCXe7aMvo",
  authDomain: "prepwise-bf015.firebaseapp.com",
  projectId: "prepwise-bf015",
  storageBucket: "prepwise-bf015.firebasestorage.app",
  messagingSenderId: "39032097053",
  appId: "1:39032097053:web:8c85ae947dede240d9b9f4",
  measurementId: "G-84FVTY21DS"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth(app)
export const db = getFirestore(app)