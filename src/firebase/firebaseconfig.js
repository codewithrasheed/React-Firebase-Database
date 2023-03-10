// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkXm8U8j52rzPY3HXMM8zYLO-h_1nGFwM",
  authDomain: "react-firebase-96d5b.firebaseapp.com",
  projectId: "react-firebase-96d5b",
  storageBucket: "react-firebase-96d5b.appspot.com",
  messagingSenderId: "815693847625",
  appId: "1:815693847625:web:188433999172131ae8b398",
  measurementId: "G-D7YC9EHL9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;