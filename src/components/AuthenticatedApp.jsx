'use strict';

import React from 'react';
import { Route, RouteHandler, Link } from 'react-router';
import BaseComponent from './BaseComponent';
import LoginStore from '../stores/LoginStore';
import AuthService from '../services/AuthService';

export default class AuthenticatedApp extends BaseComponent {

  constructor() {
    super();
    this.state = this._getLoginState();
  }

  _getLoginState() {
    return {
      userLoggedIn: LoginStore.isLoggedIn()
    };
  }

  componentDidMount() {
    this.changeListener = this._onChange.bind(this);
    LoginStore.listen(this.changeListener);
  }

  _onChange() {
    this.setState(this._getLoginState());
  }

  componentWillUnmount() {
    LoginStore.unlisten(this.changeListener);
  }

  render() {
    return (
        <RouteHandler/>
    );
  }

  logout(e) {
    e.preventDefault();
    AuthService.logout();
  }

};
