
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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
console.log("init 0");
const db = getFirestore(app);
// console.log(db);
// console.log("init 1");

// const querySnapshot = await getDocs(collection(db, "puja"));
// console.log("init 2");
// querySnapshot.forEach((doc) => {
//     console.log("query 0");
//     console.log(`${doc.id} => ${doc.data()}`);
//     console.log("query 1");
// });
// console.log("init 3");

// const collectionName = 'puja'; // Replace with your collection name

// async function logFirestoreData() {
//     const querySnapshot = await getDocs(collection(db, collectionName));

//     querySnapshot.forEach((doc) => {
//         console.log(doc.id, ' => ', doc.data());
//     });
// }
// logFirestoreData();
// console.log("db-=-=-", db)

export default db;