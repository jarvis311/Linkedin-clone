import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyB6MyfYjG_KUSw8NRna3ZhEod2Gcr4sNls",
    authDomain: "linkedin-clone-b4f30.firebaseapp.com",
    projectId: "linkedin-clone-b4f30",
    storageBucket: "linkedin-clone-b4f30.appspot.com",
    messagingSenderId: "869138315217",
    appId: "1:869138315217:web:044e7259f6aba1e00892f0",
    measurementId: "G-NNJYHCNNZK"
  };

const app = firebase.initializeApp(firebaseConfig);

 const db = app.firestore();
 const auth = firebase.auth();

 export {db,auth}