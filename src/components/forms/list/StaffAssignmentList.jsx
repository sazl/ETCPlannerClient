import React from 'react/addons';

import Immutable from 'immutable';

import { Button, Collapse, Table } from 'react-bootstrap';

import BaseComponent from 'components/BaseComponent';

import DateUtils from 'utils/date';


export default class StaffAssignmentList extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('onToggleCollapse');
    this.state = { collapsed: false };
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
    const staffAssignments = this.props.staffAssignments || [];

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
  staffAssignments: React.PropTypes.array
};
