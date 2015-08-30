import alt from '../alt';
import MissionTypeService from 'services/MissionTypeService';

class MissionTypeActions {

  fetchMissionTypes(data={}) {
    this.dispatch();
    MissionTypeService.getMissionTypes(data).then((missionTypes) => {
      this.actions.updateMissionTypes(missionTypes);
    });
  }

  updateMissionTypes(missionTypes) {
    this.dispatch(missionTypes);
  }
}

module.exports = alt.createActions(MissionTypeActions);
