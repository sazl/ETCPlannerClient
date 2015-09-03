import { getRequest, RequestService } from 'services/RequestService';

class StaffAssignmentService {

  @getRequest('staff-assignments/')
  getStaffAssignments() {}
}

export default new StaffAssignmentService();
