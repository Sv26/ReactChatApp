import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZEIC_4f-iDqC_UVOUum2_seRuVA81GAo",
  authDomain: "chat-app-c50b4.firebaseapp.com",
  projectId: "chat-app-c50b4",
  storageBucket: "chat-app-c50b4.appspot.com",
  messagingSenderId: "723143301747",
  appId: "1:723143301747:web:c01a4403785e00e79c2806",
  measurementId: "G-7B0NX8MDSZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
