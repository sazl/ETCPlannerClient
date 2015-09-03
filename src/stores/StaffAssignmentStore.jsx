/*jshint unused: false*/

import alt from '../alt';
import StaffAssignmentActions from 'actions/StaffAssignmentActions';

import Immutable from 'immutable';

class StaffAssignmentStore {

  constructor() {
    this.staffAssignments = [];
    this.staffAssignmentsByStaffIndex = Immutable.Map();
    this.bindActions(StaffAssignmentActions);
  }

  onFetchStaffAssignments() {
    this.staffAssignments = [];
  }

  onFetchStaffAssignmentByStaffIndex() {
    /* empty */
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

module.exports = alt.createStore(StaffAssignmentStore, 'StaffAssignmentStore');
