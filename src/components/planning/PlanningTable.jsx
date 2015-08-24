import React from 'react/addons';
let update = React.addons.update;

import Immutable from 'immutable';

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

import KeyUtil from 'utils/keys';


export default class PlanningTable extends BaseComponent {

  constructor(props) {
    super(props);

    this.state = {
      missionCollapse: Immutable.Map(),
      missionRoleCollapse: Immutable.Map(),
      showMissionForm: false,
      showMissionRoleForm: false,
      isCollapsed: false
    };

    this._bind(
      'collapseMission',
      'collapseMissionRole',
      'collapseAll',
      'showMissionForm',
      'closeMissionForm',
      'showMissionRoleForm',
      'closeMissionRoleForm'
    );
  }

  componentWillReceiveProps(props) {
    let missionCollapse = {};
    let missionRoleCollapse = {};

    props.missions.forEach((mission) => {
      const missionKey = KeyUtil.getMissionKey(mission);
      missionCollapse[missionKey] = false;
      mission.missionRoles.forEach((missionRole) => {
        const missionRoleKey = KeyUtil.getMissionRoleKey(missionRole);
        missionRoleCollapse[missionRoleKey] = false;
      });
    });

    this.setState({
      missionCollapse: Immutable.Map(missionCollapse),
      missionRoleCollapse: Immutable.Map(missionRoleCollapse),
      isCollapsed: false
    });
  }

  collapseMission(missionId) {
    this.setState({
      missionCollapse: this.state.missionCollapse.update(missionId, (x) => { return !x; })
    });
  }

  collapseMissionRole(missionRoleId) {
    this.setState({
      missionRoleCollapse: this.state.missionRoleCollapse.update(missionRoleId, (x) => { return !x; })
    });
  }

  collapseAll() {
    const operation = (x) => { return !this.state.isCollapsed; };
    console.log(this.state.missionCollapse);
    this.setState({
      isCollapsed: !this.state.isCollapsed,
      missionCollapse: this.state.missionCollapse.map(operation),
      missionRoleCollapse: this.state.missionRoleCollapse.map(operation)
    });
  }

  renderStaffAssignment(staffAssignment) {
    const key = KeyUtil.getStaffAssignmentKey(staffAssignment);
    const staffName = `${staffAssignment.staff.firstName} ${staffAssignment.staff.lastName}`;

    return (
      <tr key={key}>
        <td className="text-center"></td>
        <td>{staffName}</td>
        <td>{staffAssignment.startDate}</td>
        <td>{staffAssignment.endDate}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td className="text-center">
        </td>
      </tr>
    );
  }

  renderMissionRole(missionRole) {
    const key = KeyUtil.getMissionRoleKey(missionRole);
    const profileType = missionRole.profileType.profileType;

    return (
      <tr className="warning" key={key}>
        <td className="text-center">
          <ButtonGroup>
            <CollapseButton onClick={() => this.collapseMissionRole(key)}
                            isCollapsed={this.state.missionRoleCollapse.get(key)} />
          </ButtonGroup>
        </td>
        <td>{profileType}</td>
        <td>{missionRole.startDate}</td>
        <td>{missionRole.endDate}</td>
        <td></td>
        <td></td>
        <td></td>
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

  renderMission(mission) {
    const key = KeyUtil.getMissionKey(mission);
    const description = mission.description;
    const countries = mission.countries.map((country) => {
      return country.fullName;
    }).join(', ');
    const confirmedType = mission.confirmedType.confirmedType;
    const missionType = mission.missionType.missionType;

    return (
      <tr className="info" key={key}>
        <td className="text-center">
          <ButtonGroup>
            <CollapseButton onClick={() => this.collapseMission(key)}
                            isCollapsed={this.state.missionCollapse.get(key)} />
          </ButtonGroup>
        </td>
        <td>{description}</td>
        <td></td>
        <td></td>
        <td>{countries}</td>
        <td></td>
        <td>{confirmedType}</td>
        <td>{missionType}</td>
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
    this.props.missions.forEach((mission) => {
      const missionKey = KeyUtil.getMissionKey(mission);
      rows.push(this.renderMission(mission));

      if (!this.state.missionCollapse.get(missionKey)) {
        mission.missionRoles.forEach((missionRole) => {
          const missionRoleKey = KeyUtil.getMissionRoleKey(missionRole);
          rows.push(this.renderMissionRole(missionRole));

          if (!this.state.missionRoleCollapse.get(missionRoleKey)) {
            missionRole.staffAssignments.forEach((staffAssignment) => {
              rows.push(this.renderStaffAssignment(staffAssignment));
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
              <th className="text-center">
                <CollapseButton onClick={this.collapseAll}
                                isCollapsed={this.state.isCollapsed} />
              </th>
              <th>Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Location</th>
              <th>Profile Type</th>
              <th>Confirmed Type</th>
              <th>Mission Type</th>
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
