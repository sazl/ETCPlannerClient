import alt from '../alt';

import Immutable from 'immutable';

import MissionService from 'services/MissionService';


class MissionActions {
  _fetchMissions({ data={}, action=this.actions.updateMissions, detailed=false }) {
    // No dispatch !
    data = Immutable.Map.isMap(data) ? data : Immutable.Map();
    const plainData = data.toJS();
    const getMissions = detailed ? MissionService.getDetailedMissions : MissionService.getMissions;
    getMissions(plainData).then((missions) => {
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
      detailed: true
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
