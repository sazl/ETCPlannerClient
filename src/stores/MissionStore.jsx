/*jshint unused: false*/

import alt from '../alt';
import MissionActions from 'actions/MissionActions';

class MissionStore {

  constructor() {
    this.missions = [];

    this.bindActions(MissionActions);
    this.exportPublicMethods({
      getMissions: this.getMissions
    });
  }

  onUpdateMissions(missions) {
    this.missions = missions;
  }

  getMissions() {
    return this.missions;
  }

}

module.exports = alt.createStore(MissionStore, 'MissionStore');
