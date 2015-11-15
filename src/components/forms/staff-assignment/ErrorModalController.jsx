import React from 'react/addons';

import connectToStores from 'alt/utils/connectToStores';

import BaseComponent from 'components/BaseComponent';

import DurationErrorModal from 'components/forms/staff-assignment/DurationErrorModal';

import Utils from 'utils/utils';
import DateUtils from 'utils/date';

export default class ErrorModalController extends BaseComponent {

  render() {
    const {staffAssignment, staffAssignmentsByStaffIndex, ...other } = this.props;
    let showError = false;
    let staffAssignments = [];

    if (staffAssignment.get('staff') && staffAssignment.get('startDate') && staffAssignment.get('endDate')) {
      staffAssignments = staffAssignmentsByStaffIndex.get(
        staffAssignment.get('staff').index.toString()) || [];
      showError = staffAssignments && staffAssignments.length > 0;
    }

    return (
      <DurationErrorModal
       staffAssignment={staffAssignment}
       staffAssignments={staffAssignments}
       error={showError}
       {...other}
      />
    );
  }
}
