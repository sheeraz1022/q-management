import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBWNBHz4HTXBwBmOTvvt2mWyj9f7fv3Hkk",
    authDomain: "q-management-f1063.firebaseapp.com",
    databaseURL: "https://q-management-f1063.firebaseio.com",
    projectId: "q-management-f1063",
    storageBucket: "q-management-f1063.appspot.com",
    messagingSenderId: "1079241981357",
    appId: "1:1079241981357:web:eefe168094e3f379963524",
    measurementId: "G-NRFGGE2S14"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const database = firebase.database();

export default database;