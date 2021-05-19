import firebase from './firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCei6PG-SOZPxT0HaJ0iP_YBA014JhCBhg",
    authDomain: "firestore-e88d5.firebaseapp.com",
    projectId: "firestore-e88d5",
    storageBucket: "firestore-e88d5.appspot.com",
    messagingSenderId: "571956258076",
    appId: "1:571956258076:web:755244ffe9cd84f3e5c6d9"
  };
  // Initialize Firebase
  const fireb = firebase.initializeApp(firebaseConfig);
  const store = fireb.firestore()

  export {store}