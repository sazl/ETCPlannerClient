import alt from '../alt';
import StaffAssignmentService from 'services/StaffAssignmentService';

import Utils from 'utils/utils';

class StaffAssignmentActions {

  fetchStaffAssignments(data={}) {
    this.dispatch();
    StaffAssignmentService.getStaffAssignments(data).then((staffAssignments) => {
      this.actions.updateStaffAssignments(staffAssignments);
    });
  }

  fetchStaffAssignmentsByIndex(data={}) {
    this.dispatch();
    data.detailed = true;
    StaffAssignmentService.getStaffAssignments(data).then((staffAssignments) => {
      this.actions.updateStaffAssignmentsByStaffIndex(staffAssignments);
    });
  }

  saveStaffAssignment(staffAssignment) {
    StaffAssignmentService.saveStaffAssignment(staffAssignment).then((result) => {
      this.dispatch(result);
    });
  }

  updateStaffAssignments(staffAssignments) {
    this.dispatch(staffAssignments);
  }

  updateStaffAssignmentsByStaffIndex(staffAssignments) {
    this.dispatch(staffAssignments);
  }
}

module.exports = alt.createActions(StaffAssignmentActions);
