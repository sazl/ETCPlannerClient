import Immutable from 'immutable';

import { request, saveRequest, RequestService } from 'services/RequestService';
import { MISSION_URL } from 'constants/APIConstants';

import Utils from 'utils/utils';

function _toJSON(mission) {
  return Immutable.Map(mission).merge({
    missionType: mission.get('missionType').id,
    confirmedType: mission.get('confirmedType').id,
    countries: Utils.getField({ data: mission.get('countries') })
  });
}

class MissionService {

  @request(MISSION_URL)
  getMissions() {}

  @request(MISSION_URL)
  getDetailedMissions() {}

  @saveRequest(MISSION_URL, _toJSON)
  saveMission() {}
}

export default new MissionService();
