import { getRequest, RequestService } from 'services/RequestService';

class MissionRoleService {

  @getRequest('mission-roles/')
  getMissionRoles() {}
}

export default new MissionRoleService();
