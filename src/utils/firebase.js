// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbCXtFu2t58pRvBApUwDVVCNj47SRc3tg",
  authDomain: "netflixgpt-f9b8a.firebaseapp.com",
  projectId: "netflixgpt-f9b8a",
  storageBucket: "netflixgpt-f9b8a.appspot.com",
  messagingSenderId: "496145477905",
  appId: "1:496145477905:web:84136687b8e428a2c79cb0",
  measurementId: "G-FMMP91E4YT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
