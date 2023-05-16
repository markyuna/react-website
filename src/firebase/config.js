import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCCm3jjRvKevbkF8eapqccKD_lrFBRBsFc",
    authDomain: "citric-aleph-377015.firebaseapp.com",
    projectId: "citric-aleph-377015",
    storageBucket: "citric-aleph-377015.appspot.com",
    messagingSenderId: "662506878177",
    appId: "1:662506878177:web:e62fe85c4506727aa533a0",
    measurementId: "G-0ELYB9171E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};
