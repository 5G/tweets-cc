import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAg_-yTEu1GuQJq4WYqajTLuIEEe6jnhg8",
  authDomain: "tweets-cc.firebaseapp.com",
  databaseURL: "https://tweets-cc.firebaseio.com",
  projectId: "tweets-cc",
  storageBucket: "tweets-cc.appspot.com",
  messagingSenderId: "242137862634",
  appId: "1:242137862634:web:7cb53fb3c3d6ff83086293",
  measurementId: "G-HT74JL0PZY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
