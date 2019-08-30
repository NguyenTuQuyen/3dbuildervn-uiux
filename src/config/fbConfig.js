import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAeIpaq3vv7PMbihk-19obCRxeq878_nec",
    authDomain: "dbuildervn-uiux.firebaseapp.com",
    databaseURL: "https://dbuildervn-uiux.firebaseio.com",
    projectId: "dbuildervn-uiux",
    storageBucket: "",
    messagingSenderId: "1079481526539",
    appId: "1:1079481526539:web:c0dc33c8272e6837"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})
  export default firebase