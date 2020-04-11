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
import NoProcessingCard from './components/NoProcessingCard';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={NoProcessingCard} />
        <Route exact path="/dashboard/:id" component={Dashboard} />
        <Route exact path="/registration/:id" component={Registration} />
        <Route exact path="/form/:id/:name" component={InviteForm} />
        <Route exact path="/status/:id/:userkey" component={UserStatus} />

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
