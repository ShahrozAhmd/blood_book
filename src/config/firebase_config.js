// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyABDsZz3zthfTvAOAt5AB0oYCxyWYM1ag4",
  authDomain: "bloodbook-2eab5.firebaseapp.com",
  projectId: "bloodbook-2eab5",
  storageBucket: "bloodbook-2eab5.appspot.com",
  messagingSenderId: "133539561230",
  appId: "1:133539561230:web:71075587202275b729615f",
  measurementId: "G-20JEKXPMG2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//auth instances provided by firebase SDK
// For email and password
const firebaseAuth = firebase.auth();
// for google signin
const provider = new firebase.auth.GoogleAuthProvider();

// FIREBASE DATABASE INSTANCE:
const db = firebase.firestore();

// server timem, it noted the time when the server hit with the update.
const timeStamp  = firebase.firestore.FieldValue.serverTimestamp();

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = firebase.storage();

export { firebaseAuth, provider, db, timeStamp, storage };
