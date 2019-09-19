import firebase from 'firebase/app'
import'firebase/firebase-firestore'
import 'firebase/database'



var firebaseConfig = {
    apiKey: "AIzaSyAzZOyvWrq47Z_xdblLu4CYbdt4AY_oK3o",
    authDomain: "hisaab-kitaab-83302.firebaseapp.com",
    databaseURL: "https://hisaab-kitaab-83302.firebaseio.com",
    projectId: "hisaab-kitaab-83302",
    storageBucket: "hisaab-kitaab-83302.appspot.com",
    messagingSenderId: "890330518670",
    appId: "1:890330518670:web:f8cf4f6d0045b0849aa5df"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
 export  {
    firebaseApp,
    
 }