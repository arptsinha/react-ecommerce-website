import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGdpuwXhm3_vaJ5n-FLMo4VTMC1r92tf8",
    authDomain: "project-bb055.firebaseapp.com",
    projectId: "project-bb055",
    storageBucket: "project-bb055.appspot.com",
    messagingSenderId: "560101963462",
    appId: "1:560101963462:web:bcc7ccaeb50eca06d8c9c7",
    measurementId: "G-NY49BREF7L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };