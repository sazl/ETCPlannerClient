
export default class KeyUtil {
  static getMissionKey(mission) {
    return 'mission' + String(mission.id);
  }

  static getMissionRoleKey(missionRole) {
    return 'missionRole' + String(missionRole.id);
  }

  static getStaffAssignmentKey(staffAssignment) {
    return 'staffAssignment' + String(staffAssignment.id);
  }
}
