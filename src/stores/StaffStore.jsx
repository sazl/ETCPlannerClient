/*jshint unused: false*/

import alt from '../alt';
import StaffActions from 'actions/StaffActions';

class StaffStore {

  constructor() {
    this.breakInService = [];
    this.available = [];
    this.notAvailable = [];

    this.bindActions(StaffActions);
    this.exportPublicMethods({
      getBreakInService: this.getBreakInService,
      getAvailable: this.getAvailable,
      getNotAvailable: this.getNotAvailable
    });
  }

  onUpdateAvailable(staff) {
    this.available = staff;
  }

  onUpdateNotAvailable(staff) {
    this.notAvailable = staff;
  }

  getBreakInService() {
    return this.breakInService;
  }

  getAvailable() {
    return this.available;
  }

  getNotAvailable() {
    return this.notAvailable;
  }
}

module.exports = alt.createStore(StaffStore, 'StaffStore');
