import alt from '../alt';

import MissionRoleService from 'services/MissionRoleService';

import MissionActions from 'actions/MissionActions';

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

  saveMissionRole(missionRole) {
    MissionRoleService.saveMissionRole(missionRole).then((result) => {
      MissionActions.fetchFilteredMissions();
      this.dispatch(result);
    });
  }
}

module.exports = alt.createActions(MissionRoleActions);
