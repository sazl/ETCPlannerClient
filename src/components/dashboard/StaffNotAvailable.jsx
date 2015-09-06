import React from 'react/addons';
import connectToStores from 'alt/utils/connectToStores';
import StaffAssignmentActions from 'actions/StaffAssignmentActions';
import StaffAssignmentsStore from 'stores/StaffAssignmentsStore';
import StaffAssignmentStatus from 'components/dashboard/StaffAssignmentStatus';

@connectToStores
export default class StaffNotAvailable extends React.Component {
  static getStores() {
    return [StaffAssignmentsStore];
  }

  static getPropsFromStores() {
    return StaffAssignmentsStore.getState();
  }

  componentWillMount() {
    StaffAssignmentActions.fetchNotAvailable();
  }

  render() {
    return (
      <StaffAssignmentStatus
       staffAssignments={this.props.notAvailable}
       heading="Not Available"
       bsStyle="danger"
      />
    );
  }
}
