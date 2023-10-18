import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,

  authDomain: "portfolio-d75d7.firebaseapp.com",

  projectId: "portfolio-d75d7",

  storageBucket: "portfolio-d75d7.appspot.com",

  messagingSenderId: "312724516219",

  appId: "1:312724516219:web:e084c6c70a2066054521de",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
