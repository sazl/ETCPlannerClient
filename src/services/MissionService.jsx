import { request, RequestService } from 'services/RequestService';

class MissionService {

  @request('missions/')
  getMissions() {}

  @request('missions/')
  getDetailedMissions() {}
}

export default new MissionService();
