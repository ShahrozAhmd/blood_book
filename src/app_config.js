// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyABDsZz3zthfTvAOAt5AB0oYCxyWYM1ag4",
    authDomain: "bloodbook-2eab5.firebaseapp.com",
    projectId: "bloodbook-2eab5",
    storageBucket: "bloodbook-2eab5.appspot.com",
    messagingSenderId: "133539561230",
    appId: "1:133539561230:web:71075587202275b729615f",
    measurementId: "G-20JEKXPMG2"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//auth instance provided by firebase SDK
const firebaseAuth = firebase.auth();




export default firebaseAuth;

