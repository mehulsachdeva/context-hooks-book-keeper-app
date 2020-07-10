import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Home from './pages/Home';
import Login from './pages/Login';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Route exact path = "/" component = {Login} />
        <Route path = "/home" component = {Home} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
