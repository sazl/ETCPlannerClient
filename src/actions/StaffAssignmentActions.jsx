import alt from '../alt';
import StaffAssignmentService from 'services/StaffAssignmentService';

import MissionActions from 'actions/MissionActions';

import Utils from 'utils/utils';

class StaffAssignmentActions {

  fetchBreakInService() {
    this.dispatch();
    StaffAssignmentService.getBreakInService().then((staffAssignments) => {
      this.actions.updateBreakInService(staffAssignments);
    });
  }

  updateBreakInService(staffAssignments) {
    this.dispatch(staffAssignments);
  }

  fetchNotAvailable() {
    this.dispatch();
    StaffAssignmentService.getNotAvailable().then((staffAssignments) => {
      this.actions.updateNotAvailable(staffAssignments);
    });
  }

  updateNotAvailable(staffAssignments) {
    this.dispatch(staffAssignments);
  }

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
      MissionActions.fetchFilteredMissions();
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
