// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz2len4LT2BmdNFZEQqzUF1j3hB-xtUsw",
  authDomain: "react-app-1c2eb.firebaseapp.com",
  databaseURL: "https://react-app-1c2eb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-app-1c2eb",
  storageBucket: "react-app-1c2eb.appspot.com",
  messagingSenderId: "370168370980",
  appId: "1:370168370980:web:34f2f9ed4c4a6d938945b1",
  measurementId: "G-TQ1VGYRR2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = firebase.firestore();

// npm install firebase

// npm install -g firebase-tools

// firebase login

// firebase init

// firebase deploy