import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
    //firebase configuration

})

const db = firebaseApp.firestore();
// Export the database for components to use.
export {db}


