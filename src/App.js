import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import LandingPage from './Views/LandingPage';
import Header from './Components/Header';

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path="/about" exact>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </header>
            </div>
          </Route>
          <Route path="/" component={LandingPage} exact/>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
