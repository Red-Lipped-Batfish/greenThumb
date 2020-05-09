/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React, { Component } from 'react';
import Queries from './components/Queries.jsx';
// import store from './store.js';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <div className="main">
          HELLO WORLD
          <div>
            <Queries />
          </div>
        </div>
    );
  }
}

export default App;
