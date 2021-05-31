import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBrXBwDas__M21Z9Qjh5Mm-CKEqPY4tDao",
  authDomain: "crud-65718.firebaseapp.com",
  databaseURL: "https://crud-65718-default-rtdb.firebaseio.com",
  projectId: "crud-65718",
  storageBucket: "crud-65718.appspot.com",
  messagingSenderId: "1068396268256",
  appId: "1:1068396268256:web:aafcb8db899dd13e3e5e85"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;