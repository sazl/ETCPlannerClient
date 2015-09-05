import { request, RequestService } from 'services/RequestService';

class ProfileTypeService {

  @request('profile-types/')
  getProfileTypes() {}
}

export default new ProfileTypeService();
