import alt from '../alt';
import MissionService from 'services/MissionService';

class MissionActions {

  _fetchMissions(data={}, action=this.actions.updateMissions) {
    this.dispatch();
    MissionService.getMissions(data).then((missions) => {
      action(missions);
    });
  }

  fetchMissions() {
    this.actions._fetchMissions();
  }

  fetchDetailedMissions() {
    this.actions._fetchMissions({ 'detailed': 'true' });
  }

  updateMissions(missions) {
    this.dispatch(missions);
  }
}

module.exports = alt.createActions(MissionActions);
