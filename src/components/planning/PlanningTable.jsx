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

import { GridLoader } from 'halogen';

import BaseComponent from 'components/BaseComponent';
import CollapseButton from 'components/CollapseButton';
import MissionForm from 'components/forms/MissionForm';
import MissionRoleForm from 'components/forms/MissionRoleForm';

import KeyUtil from 'utils/keys';
import DateUtil from 'utils/date';

export default class PlanningTable extends BaseComponent {

  constructor(props) {
    super(props);

    this.state = {
      missionCollapse: Immutable.Map(),
      missionRoleCollapse: Immutable.Map(),
      showMissionForm: false,
      showMissionRoleForm: false,
      isCollapsed: true
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
    const defaultCollapseState = true;

    props.missions.forEach((mission) => {
      mission.key = KeyUtil.getKey();
      missionCollapse[mission.key] = defaultCollapseState;
      mission.missionRoles.forEach((missionRole) => {
        missionRole.key = KeyUtil.getKey();
        missionRoleCollapse[missionRole.key] = defaultCollapseState;
        missionRole.staffAssignments.forEach((staffAssignment) => {
          staffAssignment.key = KeyUtil.getKey();
        });
      });
    });

    this.setState({
      missionCollapse: Immutable.Map(missionCollapse),
      missionRoleCollapse: Immutable.Map(missionRoleCollapse),
      isCollapsed: defaultCollapseState
    });
  }

  collapseMission(missionId) {
    this.setState({
      missionCollapse: this.state.missionCollapse.update(
        missionId, (x) => { return !x; })
    });
  }

  collapseMissionRole(missionRoleId) {
    this.setState({
      missionRoleCollapse: this.state.missionRoleCollapse.update(
        missionRoleId, (x) => { return !x; })
    });
  }

  collapseAll() {
    const operation = (x) => { return !this.state.isCollapsed; };
    this.setState({
      isCollapsed: !this.state.isCollapsed,
      missionCollapse: this.state.missionCollapse.map(operation),
      missionRoleCollapse: this.state.missionRoleCollapse.map(operation)
    });
  }

  renderStaffAssignment(staffAssignment) {
    const key = staffAssignment.key;
    const staffName = `${staffAssignment.staff.firstName} ${staffAssignment.staff.lastName}`;
    const startDate = DateUtil.formatDate(staffAssignment.startDate);
    const endDate = DateUtil.formatDate(staffAssignment.endDate);

    return (
      <tr key={key}>
        <td className="text-center"></td>
        <td>{staffName}</td>
        <td>{startDate}</td>
        <td>{endDate}</td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <ButtonGroup>
            <Button bsSize="xs" bsStyle="default" onClick={() => { this.showMissionForm(mission); }}>
              <Glyphicon glyph="edit"/>
            </Button>
            <Button style={{display: 'none'}} bsSize="xs" bsStyle="success" onClick={() => { }}>
              <Glyphicon glyph="plus"/>
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  }

  renderMissionRole(missionRole) {
    const key = missionRole.key;
    const profileType = missionRole.profileType.profileType;
    const startDate = DateUtil.formatDate(missionRole.startDate);
    const endDate = DateUtil.formatDate(missionRole.endDate);
    const location = missionRole.location;

    return (
      <tr className="warning" key={key}>
        <td className="text-center">
          {missionRole.staffAssignments.length > 0 ?
          <ButtonGroup>
            <CollapseButton onClick={() => this.collapseMissionRole(key)}
                            isCollapsed={this.state.missionRoleCollapse.get(key)} />
          </ButtonGroup>
          :
          null}
        </td>
        <td>{profileType}</td>
        <td>{startDate}</td>
        <td>{endDate}</td>
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
    const key = mission.key;
    const description = mission.description;
    const countries = mission.countries.map((country) => {
      return country.fullName;
    }).join(', ');
    const confirmedType = mission.confirmedType.confirmedType;
    const missionType = mission.missionType.missionType;

    return (
      <tr className="info" key={key}>
        <td className="text-center">
          {mission.missionRoles.length > 0 ?
          <ButtonGroup>
            <CollapseButton onClick={() => this.collapseMission(key)}
                            isCollapsed={this.state.missionCollapse.get(key)} />
          </ButtonGroup>
          :
          null}
        </td>
        <td>{description}</td>
        <td></td>
        <td></td>
        <td>{countries}</td>
        <td>{confirmedType}</td>
        <td>{missionType}</td>
        <td className="text-center">
          <ButtonGroup>
            <Button bsSize="xs" bsStyle="default"
                    onClick={() => { this.showMissionForm(mission); }}>
              <Glyphicon glyph="edit"/>
            </Button>
            <Button bsSize="xs" bsStyle="success"
                    onClick={() => { this.showMissionForm(mission); }}>
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
      const missionKey = mission.key;
      rows.push(this.renderMission(mission));

      if (!this.state.missionCollapse.get(missionKey)) {
        mission.missionRoles.forEach((missionRole) => {
          const missionRoleKey = missionRole.key;
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

  renderEmptyRow(body) {
    return (
      <tr>
        <td colSpan="8">
          <div className="absolute-center">
            {body}
          </div>
        </td>
      </tr>
    );
  }

  renderLoading() {
    return this.renderEmptyRow(
      <div>
        <b>Loading</b>
        <GridLoader color="#00CC66"/>
      </div>
    );
  }

  renderTableBody() {
    if (this.props.loadingMissions) {
      return this.renderLoading();
    }
    else if (this.props.missions.length === 0) {
      return this.renderEmptyRow(<b>No Results</b>);
    } else {
      return this.renderRows();
    }
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
    var rows = this.renderTableBody();
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
              <th className="col-md-1">Start Date</th>
              <th className="col-md-1">End Date</th>
              <th>Location</th>
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
            <MissionForm onClose={this.closeMissionForm}
                         confirmedTypes={this.props.confirmedTypes}
                         missionTypes={this.props.missionTypes} />
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
  missions: React.PropTypes.array.isRequired,
  loadingMissions: React.PropTypes.bool.isRequired
};
