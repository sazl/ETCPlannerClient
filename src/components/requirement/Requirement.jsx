import React from 'react/addons';

import connectToStores from 'alt/utils/connectToStores';

import ProfileTypeActions from 'actions/ProfileTypeActions';
import ProfileTypeStore from 'stores/ProfileTypeStore';

import MissionTypeActions from 'actions/MissionTypeActions';
import MissionTypeStore from 'stores/MissionTypeStore';

import StaffActions from 'actions/StaffActions';
import StaffStore from 'stores/StaffStore';

import BaseComponent from 'components/BaseComponent';

import RequirementActions from 'components/requirement/RequirementActions';
import RequirementStore from 'components/requirement/RequirementStore';
import RequirementView from 'components/requirement/RequirementView';


@connectToStores
export default class Requirement extends BaseComponent {

  static getStores() {
    return [
      ProfileTypeStore,
      MissionTypeStore,
      StaffStore,
      RequirementStore
    ];
  }

  static getPropsFromStores() {
    const requirementState = RequirementStore.getState();
    return {
      profileTypesSelected: requirementState.profileTypes,
      missionTypesSelected: requirementState.missionTypes,
      staffListSelected: requirementState.staffList,
      startDateSelected: requirementState.startDate,
      endDateSelected: requirementState.endDate,
      profileTypes: ProfileTypeStore.getState().profileTypes,
      missionTypes: MissionTypeStore.getState().missionTypes,
      staffList: StaffStore.getState().staff
    };
  }

  constructor(props) {
    super(props);
    this._bind(
      'onProfileTypesChange',
      'onMissionTypesChange',
      'onStaffListChange',
      'onStartDateChange',
      'onEndDateChange'
    );
  }

  componentWillMount() {
    ProfileTypeActions.fetchProfileTypes();
    MissionTypeActions.fetchMissionTypes();
    StaffActions.fetchStaff();
  }

  onProfileTypesChange(profileTypes) {
    RequirementActions.profileTypesChange(profileTypes);
  }

  onMissionTypesChange(missionTypes) {
    RequirementActions.missionTypesChange(missionTypes);
  }

  onStaffListChange(staffList) {
    RequirementActions.staffListChange(staffList);
  }

  onStartDateChange(startDate) {
    RequirementActions.startDateChange(startDate);
  }

  onEndDateChange(endDate) {
    RequirementActions.endDateChange(endDate);
  }

  render() {
    return (
      <RequirementView
       staffListSelected={this.props.staffListSelected}
       profileTypesSelected={this.props.profileTypesSelected}
       missionTypesSelected={this.props.missionTypesSelected}
       startDateSelected={this.props.startDateSelected}
       endDateSelected={this.props.endDateSelected}
       profileTypes={this.props.profileTypes}
       missionTypes={this.props.missionTypes}
       staffList={this.props.staffList}
       onProfileTypesChange={this.onProfileTypesChange}
       onStaffListChange={this.onStaffListChange}
      />
    );
  }
}
