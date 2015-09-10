import alt from '../../alt';

import Immutable from 'immutable';

import MissionActions from 'actions/MissionActions';

class PlanningToolbarActions {

  clearFilters() {
    this.dispatch();
  }

  filter(filters) {
    MissionActions.fetchDetailedMissions(filters);
    this.dispatch(filters);
  }

  missionsChange(missions) {
    this.dispatch(missions);
  }

  appendMission(mission) {
    this.dispatch(mission);
  }

  profileTypesChange(profileTypes) {
    this.dispatch(profileTypes);
  }

  confirmedTypesChange(confirmedTypes) {
    this.dispatch(confirmedTypes);
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

module.exports = alt.createActions(PlanningToolbarActions);
