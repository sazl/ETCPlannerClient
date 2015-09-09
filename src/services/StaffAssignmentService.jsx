import { request, saveRequest, RequestService } from 'services/RequestService';
import { STAFF_ASSIGNMENT_URL } from 'constants/APIConstants';

import Immutable from 'immutable';

import Utils from 'utils/utils';
import DateUtils from 'utils/date';

function _toJSON(staffAssignment) {
  return Immutable.Map(staffAssignment).merge({
    missionRole: staffAssignment.missionRole.id,
    staff: staffAssignment.staff.index,
    confirmedType: staffAssignment.confirmedType.id,
    startDate: DateUtils.formatISOFull(staffAssignment.startDate),
    endDate: DateUtils.formatISOFull(staffAssignment.endDate)
  }).toJS();
}

class StaffAssignmentService {

  @request(STAFF_ASSIGNMENT_URL)
  getStaffAssignments() {}

  @request(STAFF_ASSIGNMENT_URL + 'not-available/?nested=true')
  getNotAvailable() {}

  @request(STAFF_ASSIGNMENT_URL + 'break-in-service/?nested=true')
  getBreakInService() {}

  @saveRequest(STAFF_ASSIGNMENT_URL, _toJSON)
  saveStaffAssignment() {}
}

export default new StaffAssignmentService();
