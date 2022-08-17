// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
///// added to provide log in auth for Google accounts \\\\\
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `AIzaSyDdfIQLligK_HMSbTj0LACWrV7YGbvS9i4`,
  authDomain: `fir-chat-ba77b.firebaseapp.com`,
  projectId: "fir-chat-ba77b",
  storageBucket: "fir-chat-ba77b.appspot.com",
  messagingSenderId: "1085724008437",
  appId: "1:1085724008437:web:fcf7617d55a95d9c440abc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
///// export auth - pass in app \\\\\
export const auth = getAuth(app);
export const db = getFirestore(app);
