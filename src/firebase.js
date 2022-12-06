import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// lấy ở comment

const firebaseConfig = {
  apiKey: "AIzaSyBZ3Cz_n-l1bLBMhttMiHunVBFJmJCfrDc",
  authDomain: "netflix-clone-minh.firebaseapp.com",
  projectId: "netflix-clone-minh",
  storageBucket: "netflix-clone-minh.appspot.com",
  messagingSenderId: "316781052550",
  appId: "1:316781052550:web:5b672443e3fa37077cc707",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

//Xác thực
const auth = firebase.auth();

export { auth, db };
