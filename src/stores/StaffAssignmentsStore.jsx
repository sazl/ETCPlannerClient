/*jshint unused: false*/

import alt from '../alt';
import StaffAssignmentActions from 'actions/StaffAssignmentActions';

import Immutable from 'immutable';

class StaffAssignmentsStore {

  constructor() {
    this.staffAssignments = [];
    this.staffAssignmentsByStaffIndex = Immutable.Map();
    this.breakInService = [];
    this.notAvailable = [];
    this.bindActions(StaffAssignmentActions);
  }

  onFetchStaffAssignments() {
    this.staffAssignments = [];
  }

  onFetchStaffAssignmentByStaffIndex() {
    /* empty */
  }

  onFetchNotAvailable() {
    this.notAvailable = [];
  }

  onUpdateNotAvailable(staff) {
    this.notAvailable = staff;
  }

  onFetchBreakInService() {
    this.breakInService = [];
  }

  onUpdateBreakInService(staff) {
    this.breakInService = staff;
  }

  onUpdateStaffAssignments(staffAssignments) {
    this.staffAssignments = staffAssignments;
  }

  onUpdateStaffAssignmentsByStaffIndex(staffAssignments) {
    const mapping = staffAssignments.reduce((values, staffAssignment) => {
      const key = staffAssignment.staff.index.toString();
      if (key in values) {
        values[key].push(staffAssignment);
      } else {
        values[key] = [staffAssignment];
      }
      return values;
    }, {});
    const staffAssignmentsUpdate = Immutable.Map(mapping);
    this.staffAssignmentsByStaffIndex = this.staffAssignmentsByStaffIndex.merge(
      staffAssignmentsUpdate);
  }
}

module.exports = alt.createStore(StaffAssignmentsStore, 'StaffAssignmentsStore');
