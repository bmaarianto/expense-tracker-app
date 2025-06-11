// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKjezJb986ucxfzpDno-5pzsqnzPmfYgw",
  authDomain: "expense-tracker-bcf68.firebaseapp.com",
  projectId: "expense-tracker-bcf68",
  storageBucket: "expense-tracker-bcf68.firebasestorage.app",
  messagingSenderId: "18169255904",
  appId: "1:18169255904:web:19e60c2d9f217295b53d85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// db
export const firestore = getFirestore(app);
