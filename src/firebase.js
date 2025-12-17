// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqPrBDhDTasMwDXiqQvrr6onMqKZFW1Ec",
  authDomain: "archipielablog.firebaseapp.com",
  projectId: "archipielablog",
  storageBucket: "archipielablog.firebasestorage.app",
  messagingSenderId: "638920556361",
  appId: "1:638920556361:web:e0e22e8a0713b47afde498",
  measurementId: "G-EBY158F9XL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);