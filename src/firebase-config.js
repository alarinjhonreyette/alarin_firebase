import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC7P00phr6m_kf8OI0S9dhWnpxYA1KGeO4",
    authDomain: "alarin-firebase.firebaseapp.com",
    projectId: "alarin-firebase",
    storageBucket: "alarin-firebase.appspot.com",
    messagingSenderId: "952179477551",
    appId: "1:952179477551:web:485e0091010d72e85a8ada",
    measurementId: "G-2Z5BB8BJLZ"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);