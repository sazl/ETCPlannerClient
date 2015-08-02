'use strict';

import React from 'react';
import Router from 'react-router';
import RouterContainer from '../services/RouterContainer';
import LoginActions from '../actions/LoginActions';

import AuthenticatedApp from './AuthenticatedApp';
import App from './App';
import Login from './Login';
import Dashboard from './Dashboard';

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var content = document.getElementById('content');

var Routes = (
  <Route path="/" handler={AuthenticatedApp}>
    <Route name="login" path="/login" handler={Login}/>
    <Route path="/" handler={App}>
      <Route name="dashboard" path="/" handler={Dashboard}/>
    </Route>
  </Route>
);


var router = Router.create({routes: Routes});
RouterContainer.set(router);

let jwt = localStorage.getItem('jwt');
if (jwt) {
  LoginActions.loginUser(jwt);
}

router.run(function (Handler) {
  React.render(<Handler/>, content);
});
