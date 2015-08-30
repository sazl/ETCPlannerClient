import { getRequest, RequestService } from 'services/RequestService';

class ProfileTypeService {

  @getRequest('profile-types/')
  getProfileTypes() {}
}

export default new ProfileTypeService();
