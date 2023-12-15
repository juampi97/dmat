import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getDatabase,
  set,
  get,
  ref,
  update,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCx_0-rDUxatbdQHVZp0_13mo6kJ7HyWNk",
  authDomain: "dmat-271c6.firebaseapp.com",
  databaseURL: "https://dmat-271c6-default-rtdb.firebaseio.com",
  projectId: "dmat-271c6",
  storageBucket: "dmat-271c6.appspot.com",
  messagingSenderId: "727891508383",
  appId: "1:727891508383:web:48ee30e605f5d0dc5fb6aa",
  measurementId: "G-GTRGQH794G",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
