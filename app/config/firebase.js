// firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore  } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyB-bW_TA71EKFyk8lUsuPm3Kb5FvkpYkfs",
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID,
  // measurementId: process.env.FIREBASE_MEASUREMENT_ID

  apiKey: "AIzaSyB-bW_TA71EKFyk8lUsuPm3Kb5FvkpYkfs",
  authDomain: "kannada4u-v1.firebaseapp.com",
  projectId: "kannada4u-v1",
  storageBucket: "kannada4u-v1.appspot.com",
  messagingSenderId: "542069720046",
  appId: "1:542069720046:web:dde0b02b3dabe08d4e84ff",
  measurementId: "G-8Y2XWS6GRF"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp); // Initialize Firestore

export { firebaseApp, db }; // Export Firestore