import alt from '../alt';

import Immutable from 'immutable';

class AppActions {

  collapseSidebar() {
    this.dispatch();
  }
}

module.exports = alt.createActions(AppActions);
