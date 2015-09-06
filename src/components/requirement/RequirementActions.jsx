import alt from '../../alt';

class RequirementActions {

  profileTypesChange(profileTypes) {
    this.dispatch(profileTypes);
  }

  missionTypesChange(missionTypes) {
    this.dispatch(missionTypes);
  }

  startDateChange(startDate) {
    this.dispatch(startDate);
  }

  endDateChange(endDate) {
    this.dispatch(endDate);
  }

  staffListChange(staffList) {
    this.dispatch(staffList);
  }

}

module.exports = alt.createActions(RequirementActions);
