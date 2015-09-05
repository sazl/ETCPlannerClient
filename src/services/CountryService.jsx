import { request, RequestService } from 'services/RequestService';

class CountryService {

  @request('countries/')
  getCountries() {}
}

export default new CountryService();
