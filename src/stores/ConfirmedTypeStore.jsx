/*jshint unused: false*/

import alt from '../alt';
import ConfirmedTypeActions from 'actions/ConfirmedTypeActions';

class ConfirmedTypeStore {

  constructor() {
    this.confirmedTypes = [];
    this.bindActions(ConfirmedTypeActions);
  }

  onFetchConfirmedTypes() {
    this.confirmedTypes = [];
  }

  onUpdateConfirmedTypes(confirmedTypes) {
    this.confirmedTypes = confirmedTypes;
  }
}

module.exports = alt.createStore(ConfirmedTypeStore, 'ConfirmedTypeStore');
