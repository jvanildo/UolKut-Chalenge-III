// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = initializeApp({
  apiKey: "AIzaSyCW1jdxrq_Hbx6yP1IVxxjnp4BuwsF9g-Q",
  authDomain: "uol-chalenge-iii.firebaseapp.com",
  projectId: "uol-chalenge-iii",
  storageBucket: "uol-chalenge-iii.appspot.com",
  messagingSenderId: "207056754580",
  appId: "1:207056754580:web:62f6d449d3f2bb44272181",
});

// Initialize Firebase
export const auth = getAuth(firebaseConfig);
