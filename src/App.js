import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import LandingPage from './Views/LandingPage';
import ReportACase from './Views/ReportACase';
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
          <Route path="/report-a-case" component={ReportACase} exact/>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
