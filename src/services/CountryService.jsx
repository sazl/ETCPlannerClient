import { getRequest, RequestService } from 'services/RequestService';

class CountryService {

  @getRequest('countries/')
  getCountries() {}
}

export default new CountryService();
