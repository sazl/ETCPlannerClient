import { request, RequestService } from 'services/RequestService';

import Immutable from 'immutable';

import Utils from 'utils/utils';
import DateUtils from 'utils/date';

const STAFF_ASSIGNMENT_URL = 'staff-assignments/';

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

  @request('staff-assignments/')
  getStaffAssignments() {}

  @request('staff-assignments/not-available/?nested=true')
  getNotAvailable() {}

  @request('staff-assignments/break-in-service/?nested=true')
  getBreakInService() {}

  saveStaffAssignment(staffAssignment) {
    const entity = _toJSON(staffAssignment);
    console.log(entity);
    if (staffAssignment.id) {
      const url = Utils.getEntityURL(
        STAFF_ASSIGNMENT_URL, staffAssignment.id);
      return RequestService.put({
        url: url,
        params: entity,
        key: 'saveStaffAssignment'
      });
    } else {
      return RequestService.post({
        url: STAFF_ASSIGNMENT_URL,
        params: entity,
        key: 'saveStaffAssignment'
      });
    }
  }
}

export default new StaffAssignmentService();
