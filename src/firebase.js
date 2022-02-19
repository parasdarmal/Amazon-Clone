//import * as firebase from "firebase/app";
import firebase from "firebase";
//import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
//import 'firebase/compat/firestore';

//import 'firebase/auth';
//import firebase from 'firebase/app';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDghpUc2E9YNq8xk4cEcWURV9sUR6oFX-A",
    authDomain: "clone-7abba.firebaseapp.com",
    projectId: "clone-7abba",
    storageBucket: "clone-7abba.appspot.com",
    messagingSenderId: "769858487733",
    appId: "1:769858487733:web:c0d48360d3e50bedfbc5fc",
    measurementId: "G-7CVCJJLE8R",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };