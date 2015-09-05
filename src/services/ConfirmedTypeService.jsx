import { request, RequestService } from 'services/RequestService';

class ConfirmedTypeService {

  @request('confirmed-types/')
  getConfirmedTypes() {}
}

export default new ConfirmedTypeService();
