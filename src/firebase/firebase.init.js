// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAKXqPhkdsrlDfredoov4UZX8mrmpPRok",
  authDomain: "auth-firebase-c9aef.firebaseapp.com",
  projectId: "auth-firebase-c9aef",
  storageBucket: "auth-firebase-c9aef.appspot.com",
  messagingSenderId: "412733156522",
  appId: "1:412733156522:web:6be72aecf29e44cf52f4d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;