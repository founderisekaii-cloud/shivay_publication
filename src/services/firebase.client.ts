import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC5RdL0mt280HpWF_CfaR50jbfEKITN3iA",
  authDomain: "shivay-publication.firebaseapp.com",
  projectId: "shivay-publication",
  storageBucket: "shivay-publication.firebasestorage.app",
  messagingSenderId: "650992778461",
  appId: "1:650992778461:web:e613a905024e08c7bbaf34",
  measurementId: "G-0334D25CMY"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
