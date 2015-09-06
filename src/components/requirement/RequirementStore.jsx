/*jshint unused: false*/

import alt from '../../alt';
import Immutable from 'immutable';
import RequirementActions from 'components/requirement/RequirementActions';


class RequirementStore {

  constructor() {
    this.staffList = Immutable.List();
    this.profileTypes = Immutable.List();
    this.missionTypes = Immutable.List();
    this.startDate = null;
    this.endDate = null;
    this.bindActions(RequirementActions);
  }

  onStaffListChange(staffList) {
    this.setState({
      staffList: Immutable.List(staffList)
    });
  }

  onProfileTypesChange(profileTypes) {
    this.setState({
      profileTypes: Immutable.List(profileTypes)
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

}

module.exports = alt.createStore(RequirementStore, 'RequirementStore');
