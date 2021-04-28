import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
    //firebase configuration
    apiKey: "AIzaSyDpR4vBIdmKdumA8GNMpCak8WhLmqZ3h2o",
    authDomain: "autosave-form.firebaseapp.com",
    databaseURL: "https://autosave-form.firebaseio.com",
    projectId: "autosave-form",
    storageBucket: "autosave-form.appspot.com",
    messagingSenderId: "679039347135",
    appId: "1:679039347135:web:801c8d258d0b454849590a",
    measurementId: "G-WH815WYB9M"
})

const db = firebaseApp.firestore();
// Export the database for components to use.
export {db}


