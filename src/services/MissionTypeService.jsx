import { getRequest, RequestService } from 'services/RequestService';

class MissionTypeService {

  @getRequest('mission-types/')
  getMissionTypes() {}
}

export default new MissionTypeService();
