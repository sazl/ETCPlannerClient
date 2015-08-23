import { getRequest, RequestService } from 'services/RequestService';

class MissionService {

  @getRequest('missions/')
  getMissions() {}
}

export default new MissionService();
