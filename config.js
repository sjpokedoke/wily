import * as firebase from 'firebase';

require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyCsteEPrti_qt0pE54tqHfnQEWXBbqPMMk",
    authDomain: "wili-7c2f8.firebaseapp.com",
    projectId: "wili-7c2f8",
    storageBucket: "wili-7c2f8.appspot.com",
    messagingSenderId: "1004295243637",
    appId: "1:1004295243637:web:09c0ca46d8d19615a7353c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore(); 