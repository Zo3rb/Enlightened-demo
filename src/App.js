import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './css/App.css';
import WelcomePage from './pages/WelcomePage';
import Register from './pages/Register';
import DemoPage from './pages/DemoPage';
import PlansPage from './pages/PlansPage';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={WelcomePage} />
        <Route exact path='/reg' component={Register} />
        <Route exact path='/plans' component={PlansPage} />
        <Route exact path='/demo' component={DemoPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
