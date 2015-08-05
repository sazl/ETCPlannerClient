/*jshint unused: false*/

import alt from '../alt';
import LoginActions from '../actions/LoginActions';

class LoginStore {

  constructor() {
    this.user = null;
    this.token = null;

    this.bindListeners({
      handleLoginUser: LoginActions.LOGIN_USER,
      handleLogoutUser: LoginActions.LOGOUT_USER
    });

    this.exportPublicMethods({
      isLoggedIn: this.isLoggedIn
    });
  }

  handleLoginUser(token) {
    this._token = token;
  }

  handleLogoutUser() {
    this.user = null;
  }

  isLoggedIn() {
    return !!this._user;
  }
}

module.exports = alt.createStore(LoginStore, 'LoginStore');
