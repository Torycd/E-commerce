// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHtnfZsUbQmOht87GrRbV0vVOwua7eqDY",
  authDomain: "ecommerce-auth-d91b2.firebaseapp.com",
  projectId: "ecommerce-auth-d91b2",
  storageBucket: "ecommerce-auth-d91b2.appspot.com",
  messagingSenderId: "492023019175",
  appId: "1:492023019175:web:348fa7547f75d684b3cd82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;