import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


// import * as  process
console.log("key", process.env)
const firebaseConfig = {
  apiKey: "AIzaSyDBImwCpYJYbPOPxu27ABqcQgqEm9pQ-CM",
  authDomain: "the-force-8688d.firebaseapp.com",
  projectId: "the-force-8688d",
  storageBucket: "the-force-8688d.appspot.com",
  messagingSenderId: "1012241051138",
  appId: "1:1012241051138:web:14b3786518e5b2a81d011b",
  measurementId: "G-NBY1FE4714"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app);
export  { firebase_app, auth};