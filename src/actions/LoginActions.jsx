import alt from '../alt';
import {LOGIN_USER, LOGOUT_USER} from 'constants/LoginConstants';
import RouterContainer from 'services/RouterContainer';

class LoginActions {

  login(username, password) {
    /* empty */
  }

  loginUser(token) {
    var savedToken = localStorage.getItem('token');

    if (savedToken !== token) {
      var nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/';
      RouterContainer.get().transitionTo(nextPath);
      localStorage.setItem('token', token);
    }

    this.dispatch(token);
  }

  logoutUser() {
    RouterContainer.get().transitionTo('/login');
    localStorage.removeItem('token');
    this.dispatch();
  }
}

module.exports = alt.createActions(LoginActions);
