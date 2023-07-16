import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBnO8ZmooR59sRhOCUxPtAVwavldOTMibU",
  authDomain: "disney-plus-73af6.firebaseapp.com",
  projectId: "disney-plus-73af6",
  storageBucket: "disney-plus-73af6.appspot.com",
  messagingSenderId: "66141634327",
  appId: "1:66141634327:web:1841c3e08684080a790152",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
