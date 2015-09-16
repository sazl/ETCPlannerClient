/*jshint unused: false*/

import alt from '../../alt';

import Immutable from 'immutable';

import PlanningToolbarActions from 'components/planning/PlanningToolbarActions';

import Utils from 'utils/utils';
import DateUtils from 'utils/date';


class PlanningToolbarStore {

  constructor() {
    this.bindActions(PlanningToolbarActions);
    this._initialize();
    this.exportPublicMethods({
      getFilters: this.getFilters
    });
  }

  _initializeWithDefaultDates() {
    const { start, end } = DateUtils.monthRange();
    this._initialize();
    this.startDate = start;
    this.endDate = end;
  }

  _initialize() {
    this.missions = Immutable.List();
    this.profileTypes = Immutable.List();
    this.confirmedTypes = Immutable.List();
    this.missionTypes = Immutable.List();
    this.startDate = null;
    this.endDate = null;
    this.staffList = Immutable.List();
    this.filters = Immutable.List();
  }

  onClearFilters() {
    this._initialize();
  }

  getFilters() {
    const state = this.getState();
    return Immutable.Map({
      'mission_id': Utils.commaJoinField(state.missions),
      'profile_type_id': Utils.commaJoinField(state.profileTypes),
      'confirmed_type_id': Utils.commaJoinField(state.confirmedTypes),
      'mission_type_id': Utils.commaJoinField(state.missionTypes),
      'start_date_lte': DateUtils.formatISO(state.endDate),
      'end_date_gte': DateUtils.formatISO(state.startDate),
      'staff_index': Utils.commaJoinField(state.staffList, 'index')
    });
  }

  onFilter() {
    /* empty */
  }

  onMissionsChange(missions) {
    this.setState({
      missions: Immutable.List(missions)
    });
  }

  onAppendMission(mission) {
    this.setState({
      missions: this.missions.push(
        Immutable.Map(mission).toJS())
    });
  }

  onProfileTypesChange(profileTypes) {
    this.setState({
      profileTypes: Immutable.List(profileTypes)
    });
  }

  onConfirmedTypesChange(confirmedTypes) {
    this.setState({
      confirmedTypes: Immutable.List(confirmedTypes)
    });
  }

  onMissionTypesChange(missionTypes) {
    this.setState({
      missionTypes: Immutable.List(missionTypes)
    });
  }

  onStartDateChange(date) {
    this.setState({
      startDate: date
    });
  }

  onEndDateChange(date) {
    this.setState({
      endDate: date
    });
  }

  onStaffListChange(staffList) {
    this.setState({
      staffList: Immutable.List(staffList)
    });
  }

}

module.exports = alt.createStore(PlanningToolbarStore, 'PlanningToolbarStore');
