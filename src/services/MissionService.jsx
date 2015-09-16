import Immutable from 'immutable';

import { MISSION_URL } from 'constants/APIConstants';

import {
  request,
  saveRequest,
  deleteRequest,
  RequestService
} from 'services/RequestService';

import PlanningToolbarStore from 'components/planning/PlanningToolbarStore';

import Utils from 'utils/utils';

function _toJSON(mission) {
  return Immutable.Map(mission).merge({
    missionType: mission.get('missionType').id,
    confirmedType: mission.get('confirmedType').id,
    countries: Utils.getField({ data: mission.get('countries') })
  }).toJS();
}

class MissionService {

  @request(MISSION_URL)
  getMissions() {}

  @request(MISSION_URL)
  getDetailedMissions() {}

  getFilteredMissions() {
    return RequestService.get({
      url: MISSION_URL,
      params: PlanningToolbarStore.getFilters().merge({
        detailed: 'true'
      }).toJS(),
      key: 'getDetailedMissions'
    });
  }

  @saveRequest(MISSION_URL, _toJSON)
  saveMission() {}

  @deleteRequest(MISSION_URL)
  deleteMission() {}
}

export default new MissionService();
