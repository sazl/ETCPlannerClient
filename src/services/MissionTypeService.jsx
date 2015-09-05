import { request, RequestService } from 'services/RequestService';

class MissionTypeService {

  @request('mission-types/')
  getMissionTypes() {}
}

export default new MissionTypeService();
