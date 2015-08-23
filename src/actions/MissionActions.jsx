import alt from '../alt';
import MissionService from 'services/MissionService';

class MissionActions {

  fetchMissions() {
    this.dispatch();
    MissionService.getMissions().then((missions) => {
      this.actions.updateMissions(missions);
    });
  }

  updateMissions(missions) {
    this.dispatch(missions);
  }
}

module.exports = alt.createActions(MissionActions);
