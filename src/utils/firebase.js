import { initializeApp } from "firebase/app";
import { getAuth, getAyth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDAuIOKL-sYVtz0TQsWD9lnvzR7jN5iuCs",
  authDomain: "productauction-564de.firebaseapp.com",
  projectId: "productauction-564de",
  storageBucket: "productauction-564de.appspot.com",
  messagingSenderId: "320203745154",
  appId: "1:320203745154:web:1b9996b6564f6cd267119b",
  measurementId: "G-XSQEJ6SR8P"
};


const app = initializeApp(firebaseConfig);
const analytics =getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storageDB = getStorage(app);
export {auth,db,storageDB}

