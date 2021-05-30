import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD-hZdcA5JSJEcnaz6jhZvDMQybzVBwGpw",
  authDomain: "e-clothing-db-a470e.firebaseapp.com",
  projectId: "e-clothing-db-a470e",
  storageBucket: "e-clothing-db-a470e.appspot.com",
  messagingSenderId: "997090148915",
  appId: "1:997090148915:web:b2aee97becb7c4cea99946",
  measurementId: "G-09QT42ZHCR",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
