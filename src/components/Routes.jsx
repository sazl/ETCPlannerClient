import React from 'react';
import Router from 'react-router';

import AuthenticatedApp from './AuthenticatedApp';
import App from './App';
import Login from './Login';
import Dashboard from './Dashboard';
import Planning from './Planning';

let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

let Routes = (
  <Route path="/" handler={AuthenticatedApp}>
    <Route name="login" path="/login" handler={Login} />
    <Route path="/" handler={App}>
      <Route name="dashboard" path="/" handler={Dashboard} />
      <Route name="planning" path="/planning" handler={Planning} />
    </Route>
  </Route>
);

module.exports = Routes;
