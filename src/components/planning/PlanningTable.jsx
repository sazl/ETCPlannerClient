import React from 'react/addons';
let update = React.addons.update;

import {
  Row,
  Col,
  Panel,
  Table,
  Button,
  ButtonGroup,
  Glyphicon,
  Collapse
} from 'react-bootstrap';

import BaseComponent from '../BaseComponent';
import CollapseButton from '../CollapseButton';

export default class PlanningTable extends BaseComponent {

  constructor(...props) {
    super(...props);
    this.state = {
      missionCollapse: {},
      missionRoleCollapse: {}
    };
    this._bind('collapseMission', 'collapseMissionRole');
  }

  collapseMission(missionId) {
    var operation = {};
    operation[missionId] = {$apply: (x) => { return !x; }};
    this.setState({
      missionCollapse: update(this.state.missionCollapse, operation)
    });
  }

  collapseMissionRole(missionRoleId) {
    var operation = {};
    operation[missionRoleId] = {$apply: (x) => { return !x; }};
    this.setState({
      missionRoleCollapse: update(this.state.missionRoleCollapse, operation)
    });
  }

  renderStaffAssignment(staffAssignment, key) {
    return (
      <tr key={staffAssignment.staff.name + key}>
        <td className="text-center"></td>
        <td>{staffAssignment.staff.name}</td>
        <td>{staffAssignment.startDate}</td>
        <td>{staffAssignment.endDate}</td>
        <td></td>
        <td className="text-center">
        </td>
      </tr>
    );
  }

  renderMissionRole(missionRole, key) {
    return (
      <tr className="warning" key={missionRole.name + key}>
        <td className="text-center">
          <ButtonGroup>
            <CollapseButton onClick={() => this.collapseMissionRole(key)}
                            isCollapsed={this.state.missionRoleCollapse[key]} />
          </ButtonGroup>
        </td>
        <td>{missionRole.name}</td>
        <td>{missionRole.startDate}</td>
        <td>{missionRole.endDate}</td>
        <td></td>
        <td className="text-center">
          <Button bsSize="xs" bsStyle="success">
            <Glyphicon glyph="plus"/>
          </Button>
        </td>
      </tr>
    );
  }

  renderMission(mission, key) {
    return (
      <tr className="info" key={mission + key}>
        <td className="text-center">
          <ButtonGroup>
            <CollapseButton onClick={() => this.collapseMission(key)}
                            isCollapsed={this.state.missionCollapse[key]} />
          </ButtonGroup>
        </td>
        <td>{mission.mission}</td>
        <td></td>
        <td></td>
        <td></td>
        <td className="text-center">
          <Button bsSize="xs" bsStyle="success">
            <Glyphicon glyph="plus"/>
          </Button>
        </td>
      </tr>
    );
  }

  renderRows() {
    var rows = [];
    this.props.missions.forEach((mission, i) => {
      rows.push(this.renderMission(mission, i));
      if (!this.state.missionCollapse[i]) {
        mission.missionRoles.forEach((missionRole, j) => {
          rows.push(this.renderMissionRole(missionRole, j));
          if (!this.state.missionRoleCollapse[j]) {
            missionRole.staffAssignments.forEach((staffAssignment, k) => {
              rows.push(this.renderStaffAssignment(staffAssignment, k));
            });
          }
        });
      }
    });
    return rows;
  }

  render() {
    var rows = this.renderRows();
    return (
      <Table bordered striped hover condensed>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Planned Start Date</th>
            <th>Planned Finish Date</th>
            <th>Planned Duration</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    );
  }
}

PlanningTable.propTypes = {
  missions: React.PropTypes.array.isRequired
};
