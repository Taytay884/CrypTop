import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Router, Route, Switch } from 'react-router'

import Header from './components/Header/Header'
import ContactPage from './pages/ContactPage/ContactPage';
import ContactDetailsPage from './pages/ContactDetailsPage/ContactDetailsPage';
import ContactEditPage from './pages/ContactEditPage/ContactEditPage';

import logo from './logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/contacts" component={ContactPage} />
              <Route exact path="/contact/:id" component={ContactDetailsPage} />
              <Route path="/contact/edit/:id?" component={ContactEditPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
