import { request, saveRequest, RequestService } from 'services/RequestService';
import { MISSION_ROLE_URL } from 'constants/APIConstants';

import Immutable from 'immutable';

import DateUtils from 'utils/date';

function _toJSON(missionRole) {
  const startDate = DateUtils.formatISOFull(missionRole.startDate);
  const endDate = DateUtils.formatISOFull(missionRole.endDate);

  return Immutable.Map(missionRole).merge({
    mission: missionRole.mission.id,
    startDate: startDate ? startDate : null,
    endDate: endDate ? endDate : null,
    profileType: missionRole.profileType.id
  }).toJS();
}

class MissionRoleService {

  @request(MISSION_ROLE_URL)
  getMissionRoles() {}

  @saveRequest(MISSION_ROLE_URL, _toJSON)
  saveMissionRole() {}
}

export default new MissionRoleService();
