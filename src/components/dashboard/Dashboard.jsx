'use strict';
import React from 'react/addons';
import Router from 'react-router';

import connectToStores from 'alt/utils/connectToStores';

import StaffActions from 'actions/StaffActions';
import StaffStore from 'stores/StaffStore';
import DashboardView from 'components/dashboard/DashboardView';

@connectToStores
export default class Dashboard extends React.Component {

  static getStores() {
    return [StaffStore];
  }

  static getPropsFromStores() {
    return StaffStore.getState();
  }

  componentWillMount() {
    StaffActions.fetchAvailable();
    StaffActions.fetchNotAvailable();
    StaffActions.fetchBreakInService();
  }

  render() {
    return (
      <DashboardView
      availableStaff={this.props.available}
      breakInServiceStaff={this.props.breakInService}
      notAvailableStaff={this.props.notAvailable}
      />
    );
  }
}

export default Dashboard;
