// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBmVWpIu5Bz3MQclg0lFVWQc33m_CIfsrA",

  authDomain: "netflix-clone-a938f.firebaseapp.com",

  projectId: "netflix-clone-a938f",

  storageBucket: "netflix-clone-a938f.appspot.com",

  messagingSenderId: "1031633100389",

  appId: "1:1031633100389:web:7ac6f742195582bf5fb08c",

  measurementId: "G-VWG2BN7DSV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

// export default function(){return(<>Nothing is here!</>)}