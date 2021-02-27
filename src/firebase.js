import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBKN_UB7kmC0_dQVVpW9gy__x2aUG8bfyo",
  authDomain: "users-dashboard-85501.firebaseapp.com",
  projectId: "users-dashboard-85501",
  storageBucket: "users-dashboard-85501.appspot.com",
  messagingSenderId: "151340110438",
  appId: "1:151340110438:web:ee3a198362ba57318813a7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

export {firebase, auth}