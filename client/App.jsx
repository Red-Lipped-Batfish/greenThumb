/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description manages routing for application
 *
 * ************************************
 */

import React, { Component } from 'react';
import Queries from './components/Queries.jsx';
import NavBar from './components/NavBar.jsx';
import Signup from './components/Signup.jsx';
import Homepage from './components/Homepage.jsx';
import PlantShelf from './components/PlantShelf.jsx';
// import store from './store.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/" component={ Homepage } />
            <Route exact path="/query" component={ Queries } />
            <Route exact path="/plantshelf" component={ PlantShelf } />
            <Route exact path="/signup" component={ Signup } />
            {/* <Route exact path="/profile" component={ Profile } /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
