import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCJ9oODqMVPV0QKRsLmZlaqHKkUdeks6D0",
    authDomain: "vue-spa-ece26.firebaseapp.com",
    databaseURL: "https://vue-spa-ece26.firebaseio.com",
    projectId: "vue-spa-ece26",
    storageBucket: "vue-spa-ece26.appspot.com",
    messagingSenderId: "371004684516",
    appId: "1:371004684516:web:aeef62f49b5ebaac7414f1"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();