import alt from '../alt';

import Immutable from 'immutable';

import MissionService from 'services/MissionService';

class MissionActions {
  _fetchMissions({ data={}, action=this.actions.updateMissions, method=false }) {
    // No dispatch !
    data = Immutable.Map.isMap(data) ? data : Immutable.Map();
    const plainData = data.toJS();
    const getMissions = method ? method : MissionService.getMissions;
    getMissions(plainData).then((missions) => {
      console.log(missions);
      action(missions);
    });
  }

  fetchMissions() {
    this.dispatch();
    this.actions._fetchMissions({
      action: this.updateMissions
    });
  }

  fetchDetailedMissions(data) {
    this.dispatch();
    data = data || Immutable.Map();
    const detailedData = data.merge({ detailed: 'true'});
    this.actions._fetchMissions({
      data: detailedData,
      action: this.actions.updateDetailedMissions,
      method: MissionService.getDetailedMissions
    });
  }

  fetchFilteredMissions() {
    this.dispatch();
    this.actions._fetchMissions({
      action: this.actions.updateDetailedMissions,
      method: MissionService.getFilteredMissions
    });
  }

  saveMission(mission) {
    MissionService.saveMission(mission).then((result) => {
      this.actions.fetchMissions();
      this.actions.fetchFilteredMissions();
      this.dispatch(result);
    });
  }

  deleteMission(mission) {
    MissionService.deleteMission(mission).then((result) => {
      this.actions.fetchMissions();
      this.actions.fetchFilteredMissions();
      this.dispatch(result);
    });
  }

  updateMissions(missions) {
    this.dispatch(missions);
  }

  updateDetailedMissions(missions) {
    this.dispatch(missions);
  }
}

module.exports = alt.createActions(MissionActions);
