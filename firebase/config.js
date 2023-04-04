// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqnMz8tDWytX5WSIM_Fr85l6v2w60Q0SY",
  authDomain: "calendarapp-50792.firebaseapp.com",
  projectId: "calendarapp-50792",
  storageBucket: "calendarapp-50792.appspot.com",
  messagingSenderId: "404177770729",
  appId: "1:404177770729:web:d89e3116a323d9d86db878"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Authentication initialization
export const auth = getAuth( app )

