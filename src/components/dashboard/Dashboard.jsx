'use strict';
import React from 'react/addons';
import Router from 'react-router';

import connectToStores from 'alt/utils/connectToStores';

import StaffActions from 'actions/StaffActions';
import StaffStore from 'stores/StaffStore';

import StaffAssignmentActions from 'actions/StaffAssignmentActions';
import StaffAssignmentsStore from 'stores/StaffAssignmentsStore';

import DashboardView from 'components/dashboard/DashboardView';

@connectToStores
export default class Dashboard extends React.Component {

  static getStores() {
    return [StaffStore, StaffAssignmentsStore];
  }

  static getPropsFromStores() {
    const staffAssignmentsState = StaffAssignmentsStore.getState();
    return {
      available: StaffStore.getState().available,
      breakInService: staffAssignmentsState.breakInService,
      notAvailable: staffAssignmentsState.notAvailable
    };
  }

  componentWillMount() {
    StaffActions.fetchAvailable();
    StaffAssignmentActions.fetchNotAvailable();
    StaffAssignmentActions.fetchBreakInService();
  }

  render() {
    return (
      <DashboardView
      availableStaff={this.props.available}
      breakInServiceStaffAssignments={this.props.breakInService}
      notAvailableStaffAssignments={this.props.notAvailable}
      />
    );
  }
}

export default Dashboard;
