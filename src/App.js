import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import LandingPage from './Views/LandingPage';
import ReportACase from './Views/ReportACase';
import SolveACase from './Views/SolveACase';
import Header from './Components/Header';
import UnderConstruction from './Views/UnderConstruction';
import NotFound from './Views/NotFound';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path="/about" component={UnderConstruction} exact />
          <Route path="/" component={LandingPage} exact/>
          <Route path="/report-a-case" component={ReportACase} exact/>
          <Route path="/solve-a-case" component={SolveACase} exact/>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
