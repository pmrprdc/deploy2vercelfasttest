// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1alNxi0_M7IsOmr5zyk2bBYYTq0uVMK0",
  authDomain: "login-ed827.firebaseapp.com",
  projectId: "login-ed827",
  storageBucket: "login-ed827.appspot.com",
  messagingSenderId: "734072231152",
  appId: "1:734072231152:web:818f6ca266c860e763de35",
  measurementId: "G-YZ8JJ3L1ZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };

