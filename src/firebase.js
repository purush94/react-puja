
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB4prwvbCY62tbKRzVTLmtx6uQzwnq4JzU",
    authDomain: "devansh-6a3d3.firebaseapp.com",
    projectId: "devansh-6a3d3",
    storageBucket: "devansh-6a3d3.appspot.com",
    messagingSenderId: "263365175585",
    appId: "1:263365175585:web:6f449075a4698a9698b660",
    measurementId: "G-9Q0TRNRBGG"
};

const app = initializeApp(firebaseConfig);
// const firestore = firebase.firestore()
const db = getFirestore(firebaseConfig.projectId);
console.log("db-=-=-", db)

export default db;