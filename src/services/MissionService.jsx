import { getRequest, RequestService } from 'services/RequestService';

class MissionService {

  @getRequest('missions/')
  getMissions() {}

  @getRequest('missions/')
  getDetailedMissions() {}
}

export default new MissionService();
