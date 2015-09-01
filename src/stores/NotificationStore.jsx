/*jshint unused: false*/

import alt from '../alt';
import NotificationActions from 'actions/NotificationActions';

class NotificationStore {

  constructor() {
    this.notification = null;
    this.bindActions(NotificationActions);
  }

  onNotify(notification) {
    this.notification = notification;
  }

  onClear() {
    this.notification = null;
  }
}

module.exports = alt.createStore(NotificationStore, 'NotificationStore');
