import React from 'react/addons';

import Immutable from 'immutable';

import { Button, Collapse, Table } from 'react-bootstrap';

import connectToStores from 'alt/utils/connectToStores';

import BaseComponent from 'components/BaseComponent';

import StaffAssignmentActions from 'actions/StaffAssignmentActions';
import StaffAssignmentStore from 'stores/StaffAssignmentStore';

import Utils from 'utils/utils';
import DateUtils from 'utils/date';

@connectToStores
export default class StaffAssignmentList extends BaseComponent {

  static getStores() {
    return [StaffAssignmentStore];
  }

  static getPropsFromStores() {
    return StaffAssignmentStore.getState();
  }

  constructor(props) {
    super(props);
    this._bind('onToggleCollapse');
    this.state = { collapsed: false };
  }

  componentWillMount() {
    StaffAssignmentActions.fetchStaffAssignmentsByIndex({
      'staff_index': this.props.staff.index,
      'start_date_lte': DateUtils.formatISO(this.props.endDate),
      'end_date_gte': DateUtils.formatISO(this.props.startDate)
    });
  }

  onToggleCollapse() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  renderStaffAssignmentRows(staffAssignments) {
    const result = staffAssignments.map((staffAssignment) => {
      return (
        <tr key={staffAssignment.id}>
          <td>{staffAssignment.missionRole.profileType.profileType}</td>
          <td>{staffAssignment.missionRole.mission.description}</td>
          <td>{DateUtils.formatDate(staffAssignment.startDate)}</td>
          <td>{DateUtils.formatDate(staffAssignment.endDate)}</td>
        </tr>
      );
    });
    return result;
  }

  render() {
    const staffIndex = this.props.staff.index.toString();
    const staffAssignments = this.props.staffAssignmentsByStaffIndex.get(
      staffIndex, Immutable.List());
    return (
      <div className="alert alert-warning card-shadow-small">
        <div
         className="text-center"
         style={{marginBottom: '10px'}}>
          <Button
           bsStyle="primary"
           onClick={this.onToggleCollapse}>
            View Assignments
          </Button>
        </div>
        <Collapse in={this.state.collapsed}>
          <div>
            <Table bordered striped hover condensed className="card-shadow-small">
              <thead>
                <tr>
                  <th>Profile Type</th>
                  <th>Mission</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                </tr>
              </thead>
              <tbody>
                {this.renderStaffAssignmentRows(staffAssignments)}
              </tbody>
            </Table>
          </div>
        </Collapse>
      </div>
    );
  }
}

StaffAssignmentList.propTypes = {
  staff: React.PropTypes.object.isRequired,
  startDate: React.PropTypes.object,
  endDate: React.PropTypes.object
};
