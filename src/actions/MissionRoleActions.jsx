import alt from '../alt';
import MissionRoleService from 'services/MissionRoleService';

class MissionRoleActions {

  fetchMissionRoles(data={nested: true}) {
    this.dispatch();
    MissionRoleService.getMissionRoles(data).then((missionRoles) => {
      this.actions.updateMissionRoles(missionRoles);
    });
  }

  updateMissionRoles(missionRoles) {
    this.dispatch(missionRoles);
  }
}

module.exports = alt.createActions(MissionRoleActions);
