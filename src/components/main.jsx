'use strict';

import React from 'react';
import Router from 'react-router';

import Routes from './Routes';
import RouterContainer from '../services/RouterContainer';
import LoginActions from '../actions/LoginActions';

var content = document.getElementById('content');

var router = Router.create({routes: Routes});
RouterContainer.set(router);

let jwt = localStorage.getItem('jwt');
if (jwt) {
  LoginActions.loginUser(jwt);
}

router.run(function (Handler) {
  React.render(<Handler/>, content);
});
