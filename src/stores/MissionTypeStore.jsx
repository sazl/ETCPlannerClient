/*jshint unused: false*/

import alt from '../alt';
import MissionTypeActions from 'actions/MissionTypeActions';

class MissionTypeStore {

  constructor() {
    this.missionTypes = [];
    this.bindActions(MissionTypeActions);
  }

  onFetchMissionTypes() {
    this.missionTypes = [];
  }

  onUpdateMissionTypes(missionTypes) {
    this.missionTypes = missionTypes;
  }
}

module.exports = alt.createStore(MissionTypeStore, 'MissionTypeStore');
