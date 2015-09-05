import { request, RequestService } from 'services/RequestService';

class MissionRoleService {

  @request('mission-roles/')
  getMissionRoles() {}
}

export default new MissionRoleService();
