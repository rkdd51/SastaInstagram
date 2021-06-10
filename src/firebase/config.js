import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBxbSxQEMpEe4Go-3A3SJoUv6OYHrSJqu4",
    authDomain: "ninja-firegram-90be0.firebaseapp.com",
    projectId: "ninja-firegram-90be0",
    storageBucket: "ninja-firegram-90be0.appspot.com",
    messagingSenderId: "515579668002",
    appId: "1:515579668002:web:249ab7ced56a95b4714c7b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };