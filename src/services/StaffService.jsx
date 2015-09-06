import { request, RequestService } from 'services/RequestService';

class StaffService {

  @request('staff/')
  getStaff() {}

  @request('staff/available/?nested=true')
  getAvailable() {}

  @request('staff/not-available/?nested=true')
  getNotAvailable() {}

  @request('staff/break-in-service/?nested=true')
  getBreakInService() {}

  @request('staff/summary/')
  getSummary() {}
}

export default new StaffService();
