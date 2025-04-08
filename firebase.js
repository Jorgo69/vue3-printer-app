import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDgoPXlnNAP2rI9GljpYogSKKROXNwLaqA",
  authDomain: "ibra-vue3-printer-app.firebaseapp.com",
  projectId: "ibra-vue3-printer-app",
  storageBucket: "ibra-vue3-printer-app.firebasestorage.app",
  messagingSenderId: "1091062369450",
  appId: "1:1091062369450:web:b80848f5234ffd6ae314d3",
  measurementId: "G-MZ9GWB9V2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);


export { auth};