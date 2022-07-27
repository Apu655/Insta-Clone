// Import the functions you need from the SDKs you need
import { initializeApp, getApps,getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ82en59kZgqBBHD9IKMXl-5Zt6xWZko4",
  authDomain: "insta-clone-c4aeb.firebaseapp.com",
  projectId: "insta-clone-c4aeb",
  storageBucket: "insta-clone-c4aeb.appspot.com",
  messagingSenderId: "592167319541",
  appId: "1:592167319541:web:627f300fc715b0049a12bc",
  measurementId: "G-S1JW59KD6B"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

export {app,db,storage};
