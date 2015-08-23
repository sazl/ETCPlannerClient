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
  Collapse,
  Modal
} from 'react-bootstrap';

import BaseComponent from 'components/BaseComponent';
import CollapseButton from 'components/CollapseButton';
import MissionForm from 'components/forms/MissionForm';
import MissionRoleForm from 'components/forms/MissionRoleForm';

export default class PlanningTable extends BaseComponent {

  constructor(...props) {
    super(...props);
    this.state = {
      missionCollapse: {},
      missionRoleCollapse: {},
      showMissionForm: false,
      showMissionRoleForm: false
    };

    this._bind(
      'collapseMission',
      'collapseMissionRole',
      'showMissionForm',
      'closeMissionForm',
      'showMissionRoleForm',
      'closeMissionRoleForm'
    );
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
          <ButtonGroup>
            <Button bsSize="xs" bsStyle="default" onClick={() => { this.showMissionRoleForm(missionRole); }}>
              <Glyphicon glyph="edit"/>
            </Button>
            <Button bsSize="xs" bsStyle="success" onClick={() => { this.showMissionRoleForm(missionRole); }}>
              <Glyphicon glyph="plus"/>
            </Button>
          </ButtonGroup>
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
          <ButtonGroup>
            <Button bsSize="xs" bsStyle="default" onClick={() => { this.showMissionForm(mission); }}>
              <Glyphicon glyph="edit"/>
            </Button>
            <Button bsSize="xs" bsStyle="success" onClick={() => { this.showMissionForm(mission); }}>
              <Glyphicon glyph="plus"/>
            </Button>
          </ButtonGroup>
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

  showMissionForm(mission) {
    this.setState({
      showMissionForm: true
    });
  }

  closeMissionForm() {
    this.setState({
      showMissionForm: false
    });
  }

  showMissionRoleForm(missionRole) {
    this.setState({
      showMissionRoleForm: true
    });
  }

  closeMissionRoleForm() {
    this.setState({
      showMissionRoleForm: false
    });
  }


  render() {
    var rows = this.renderRows();
    return (
      <div>
        <Table bordered striped hover condensed className="card-shadow">
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

        <Modal bsSize="small"
               show={this.state.showMissionForm}
               onHide={this.closeMissionForm}
               backdrop={false}>
          <Modal.Header closeButton>
            <Modal.Title>Mission Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <MissionForm onClose={this.closeMissionForm} />
          </Modal.Body>
        </Modal>

        <Modal bsSize="small"
               show={this.state.showMissionRoleForm}
               onHide={this.closeMissionRoleForm}
               backdrop={false}>
          <Modal.Header closeButton>
            <Modal.Title>Mission Role Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <MissionRoleForm onClose={this.closeMissionRoleForm} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

PlanningTable.propTypes = {
  missions: React.PropTypes.array.isRequired
};
