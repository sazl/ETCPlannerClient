import { request, RequestService } from 'services/RequestService';

class StaffService {

  @request('staff/')
  getStaff() {}

  @request('staff/available/')
  getAvailable() {}

  @request('staff/not-available/')
  getNotAvailable() {}

  @request('staff/break-in-service/')
  getBreakInService() {}

  @request('staff/summary/')
  getSummary() {}
}

export default new StaffService();
