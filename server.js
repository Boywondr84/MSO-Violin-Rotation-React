// Import Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import firebaseConfig
const firebaseConfig = {
  apiKey: process.env.local.API_KEY,
  authDomain: process.env.local.authDomain,
  projectId: process.env.local.projectId,
  storageBucket: process.env.local.storageBucket,
  messagingSenderId: process.env.local.messagingSenderId,
  appId: process.env.local.appId,
};
const APP = initializeApp(firebaseConfig);
const ANALYTICS = getAnalytics(APP);
const DB = getFirestore();
