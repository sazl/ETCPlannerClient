/*jshint unused: false*/

import alt from '../alt';
import MissionRoleActions from 'actions/MissionRoleActions';

class MissionRoleStore {

  constructor() {
    this.missionRoles = [];
    this.bindActions(MissionRoleActions);
  }

  onFetchMissionRoles() {
    this.missionRoles = [];
  }

  onUpdateMissionRoles(missionRoles) {
    this.missionRoles = missionRoles;
  }
}

module.exports = alt.createStore(MissionRoleStore, 'MissionRoleStore');
