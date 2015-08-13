import RequestService from 'services/RequestService';

class StaffService {
  getAvailable() {
    return RequestService.get('staff/available/');
  }

  getNotAvailable() {
    return RequestService.get('staff/not-available/');
  }

  getBreakInService() {
    return RequestService.get('staff/break-in-service/');
  }

  getSummary() {
    return RequestService.get('staff/summary');
  }
}

export default new StaffService();
