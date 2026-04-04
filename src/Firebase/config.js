import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCXlexDNEaP10l57DBMXTd3CzUkE_gWy1g",
  authDomain: "astro-login-f8b93.firebaseapp.com",
  databaseURL: "https://astro-login-f8b93-default-rtdb.firebaseio.com",
  projectId: "astro-login-f8b93",
  storageBucket: "astro-login-f8b93.firebasestorage.app",
  messagingSenderId: "387402520662",
  appId: "1:387402520662:web:e05395cf617d49d163c3f7",
  measurementId: "G-XXW85FY6F9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;