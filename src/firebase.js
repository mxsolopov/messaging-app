import firebase from "firebase/compat/app";
import "firebase/compat/auth"; // for authentication
import "firebase/compat/storage"; // for storage
import "firebase/compat/database"; // for realtime database
import "firebase/compat/firestore"; // for cloud firestore

const firebaseConfig = {
  apiKey: "AIzaSyBBVoemvsm8Y-b8E2S5g9qFVWI_0avjzGQ",
  authDomain: "messaging-app-mern-4592b.firebaseapp.com",
  projectId: "messaging-app-mern-4592b",
  storageBucket: "messaging-app-mern-4592b.appspot.com",
  messagingSenderId: "29133058652",
  appId: "1:29133058652:web:0eaab42dad73ed0f1fac99",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
