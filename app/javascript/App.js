// app/javascript/App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Routes from './Routes';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <hr />
        </div>
        <Routes />
      </Router>
    );
  }
}
