/*jshint unused: false*/

import alt from '../alt';

import Immutable from 'immutable';

import AppActions from 'actions/AppActions';


class AppStore {

  constructor() {
    this.bindActions(AppActions);
    this.showSidebar = true;
  }

  onCollapseSidebar() {
    this.setState({
      showSidebar: !this.showSidebar
    });
  }
}

module.exports = alt.createStore(AppStore, 'AppStore');
