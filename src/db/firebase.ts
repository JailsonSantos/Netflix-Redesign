// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp, getApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCznbGlwu75qK-rk2Hh-iXzssPITccioaQ",
  authDomain: "netflix-redesign-58595.firebaseapp.com",
  projectId: "netflix-redesign-58595",
  storageBucket: "netflix-redesign-58595.appspot.com",
  messagingSenderId: "201925915979",
  appId: "1:201925915979:web:74b3f42e2edf073e9d24ce"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app
export { auth, db }
