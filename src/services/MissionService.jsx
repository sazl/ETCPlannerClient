import { request, saveRequest, RequestService } from 'services/RequestService';
import { MISSION_URL } from 'constants/APIConstants';

function _toJSON(mission) {
  return Immutable.Map(mission).merge({
    mission
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
