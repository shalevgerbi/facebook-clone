import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBvZvChlV_iRk7TQM2ldSfcno7SUgj-qTE",
    authDomain: "facebook-2-e515b.firebaseapp.com",
    projectId: "facebook-2-e515b",
    storageBucket: "facebook-2-e515b.appspot.com",
    messagingSenderId: "984638965327",
    appId: "1:984638965327:web:eccd9180a4770855664c3a"
  };

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();
  const db = app.firestore();
  const storage = firebase.storage();
  export {db,storage};