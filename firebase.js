import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-bW_TA71EKFyk8lUsuPm3Kb5FvkpYkfs",
  authDomain: "kannada4u-v1.firebaseapp.com",
  projectId: "kannada4u-v1",
  storageBucket: "kannada4u-v1.appspot.com",
  messagingSenderId: "542069720046",
  appId: "1:542069720046:web:dde0b02b3dabe08d4e84ff",
  measurementId: "G-8Y2XWS6GRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

export { app, analytics, db }; // Export Firestore
