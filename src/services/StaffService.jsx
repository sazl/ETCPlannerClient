import { getRequest, RequestService } from 'services/RequestService';

class StaffService {

  @getRequest('staff/')
  getStaff() {}

  @getRequest('staff/available/')
  getAvailable() {}

  @getRequest('staff/not-available/')
  getNotAvailable() {}

  @getRequest('staff/break-in-service/')
  getBreakInService() {}

  @getRequest('staff/summary/')
  getSummary() {}
}

export default new StaffService();
