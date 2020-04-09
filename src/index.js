import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/';
import database from './utils/FirebaseDB.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import InviteForm from './components/InviteForm';
import Dashboard from './components/Dashboard';
import Registration from './components/Registration';
import UserStatus from './components/UserStatus';



// Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyBWNBHz4HTXBwBmOTvvt2mWyj9f7fv3Hkk",
//   authDomain: "q-management-f1063.firebaseapp.com",
//   databaseURL: "https://q-management-f1063.firebaseio.com",
//   projectId: "q-management-f1063",
//   storageBucket: "q-management-f1063.appspot.com",
//   messagingSenderId: "1079241981357",
//   appId: "1:1079241981357:web:eefe168094e3f379963524",
//   measurementId: "G-NRFGGE2S14"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// const database = firebase.database();

const dbValue = database.ref('test').once('value').then((s) => console.log(s.val()));






console.log('My Vaule' + dbValue);
// function getDBValue() {
//   database.ref().once('field')
// }

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>

        <Route exact path="/dashboard/:id" component={Dashboard} />
        <Route exact path="/registration/:id" component={Registration} />
        <Route exact path="/form/:id/:name" component={InviteForm} />
        <Route exact path="/status" component={UserStatus} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
