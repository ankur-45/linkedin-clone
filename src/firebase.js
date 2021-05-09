import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDPYzCdAYhB7fiBoXmwCQr2rD3x72Z32vo",
    authDomain: "linkedin-clone-f31e0.firebaseapp.com",
    projectId: "linkedin-clone-f31e0",
    storageBucket: "linkedin-clone-f31e0.appspot.com",
    messagingSenderId: "973674455052",
    appId: "1:973674455052:web:fdc9661023712ac6658e29"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };