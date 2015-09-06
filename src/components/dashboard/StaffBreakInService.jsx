import React from 'react/addons';
import connectToStores from 'alt/utils/connectToStores';
import StaffAssignmentActions from 'actions/StaffAssignmentActions';
import StaffAssignmentsStore from 'stores/StaffAssignmentsStore';
import StaffAssignmentStatus from 'components/dashboard/StaffAssignmentStatus';

@connectToStores
export default class StaffBreakInService extends React.Component {
  static getStores() {
    return [StaffAssignmentsStore];
  }

  static getPropsFromStores() {
    return {
      breakInService: StaffAssignmentsStore.getState().breakInService
    };
  }

  componentWillMount() {
    StaffAssignmentActions.fetchBreakInService();
  }

  render() {
    return (
      <StaffAssignmentStatus
       staffAssignments={this.props.breakInService}
       heading="Break In Service"
       bsStyle="info"
      />
    );
  }
}
