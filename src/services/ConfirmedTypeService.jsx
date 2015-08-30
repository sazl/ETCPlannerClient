import { getRequest, RequestService } from 'services/RequestService';

class ConfirmedTypeService {

  @getRequest('confirmed-types/')
  getConfirmedTypes() {}
}

export default new ConfirmedTypeService();
