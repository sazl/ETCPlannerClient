import React from 'react/addons';
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
let update = React.addons.update;

import Immutable from 'immutable';

import NotificationActions from 'actions/NotificationActions';

import {
  Row,
  Col,
  Panel,
  Table,
  Button,
  ButtonGroup,
  Glyphicon,
  Collapse,
  Modal,
  Popover, OverlayTrigger
} from 'react-bootstrap';

import { GridLoader } from 'halogen';

import BaseComponent from 'components/BaseComponent';

import CollapseButton from 'components/CollapseButton';
import ColorLabel from 'components/misc/ColorLabel';
import ActionButtons from 'components/planning/ActionButtons';

import MissionForm from 'components/forms/MissionForm';
import MissionRoleForm from 'components/forms/MissionRoleForm';
import StaffAssignmentForm from 'components/forms/StaffAssignmentForm';

import PlanningToolbarStore from 'components/planning/PlanningToolbarStore';
import PlanningToolbarActions from 'components/planning/PlanningToolbarActions';

import Utils from 'utils/utils';
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
      isCollapsed: true,
      selectedMission: null,
      selectedMissionRole: null
    };

    this._bind(
      'collapseMission',
      'collapseMissionRole',
      'collapseAll',
      'showMissionForm',
      'closeMissionForm',
      'onSaveMissionForm',
      'showMissionRoleForm',
      'closeMissionRoleForm',
      'onSaveMissionRoleForm',
      'showStaffAssignmentForm',
      'closeStaffAssignmentForm',
      'onSaveStaffAssignmentForm'
    );
  }

  componentWillReceiveProps(props) {
    let missionCollapse = {};
    let missionRoleCollapse = {};
    const defaultCollapseState = false;

    props.detailedMissions.forEach((mission) => {
      missionCollapse[mission.key] = defaultCollapseState;
      mission.missionRoles.forEach((missionRole) => {
        missionRoleCollapse[missionRole.key] = defaultCollapseState;
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

  showMissionForm(mission) {
    this.setState({
      showMissionForm: true,
      selectedMission: mission
    });
  }

  closeMissionForm() {
    this.setState({
      showMissionForm: false,
      selectedMission: null
    });
  }

  onSaveMissionForm() {
    this.closeMissionForm();
    NotificationActions.notifySuccess('Saved mission');
  }

  showMissionRoleForm(missionRole, mission) {
    if (missionRole) {
      missionRole.mission = mission;
    }
    this.setState({
      showMissionRoleForm: true,
      selectedMission: mission,
      selectedMissionRole: missionRole
    });
  }

  closeMissionRoleForm() {
    this.setState({
      showMissionRoleForm: false,
      selectedMission: null,
      selectedMissionRole: null
    });
  }

  onSaveMissionRoleForm() {
    this.closeMissionRoleForm();
    NotificationActions.notifySuccess('Saved mission role');
  }

  onSaveStaffAssignmentForm() {
    this.closeStaffAssignmentForm();
    NotificationActions.notifySuccess('Saved staff assignment');
  }

  showStaffAssignmentForm(staffAssignment, missionRole) {
    if (staffAssignment) {
      staffAssignment.missionRole = missionRole;
    }
    this.setState({
      showStaffAssignmentForm: true,
      selectedMissionRole: missionRole,
      selectedStaffAssignment: staffAssignment
    });
  }

  closeStaffAssignmentForm() {
    this.setState({
      showStaffAssignmentForm: false,
      selectedMissionRole: null,
      selectedStaffAssignment: null
    });
  }

  renderStaffAssignment(staffAssignment, missionRole, renderButton=false) {
    const key = staffAssignment.key;
    const staffName = staffAssignment.staff.fullName;
    const startDate = DateUtil.formatDate(staffAssignment.startDate);
    const endDate = DateUtil.formatDate(staffAssignment.endDate);
    const plannedStartDate = DateUtil.formatDate(staffAssignment.plannedStartDate);
    const plannedEndDate = DateUtil.formatDate(staffAssignment.plannedEndDate);
    const location = staffAssignment.location;
    const confirmedType = staffAssignment.confirmedType;
    const profileTypes = Utils.getField({
      data: staffAssignment.staff.profileTypes,
      many: true,
      field: 'profileType'
    });

    return (
      <tr key={key}>
        <td className="text-center"></td>
        <td>{staffName}</td>
        <td>{startDate}</td>
        <td>{endDate}</td>
        <td>{plannedStartDate}</td>
        <td>{plannedEndDate}</td>
        <td>{location}</td>
        <td className="text-center">
          <ColorLabel
           text={confirmedType.confirmedType}
           color={confirmedType.colorCode}
          />
        </td>
        <td>
          <ul className="list-unstyled">
            {profileTypes.map((x) => { return <li key={KeyUtil.getKey()}>{x}</li>; })}
          </ul>
        </td>
        <td className="text-center">
          <ActionButtons
           onEdit={() => { this.showStaffAssignmentForm(staffAssignment, missionRole); }}
           onNew={() => {}}/>
        </td>
      </tr>
    );
  }

  renderMissionRole(missionRole, mission) {
    const key = missionRole.key;
    const profileType = missionRole.profileType.profileType;
    const startDate = DateUtil.formatDate(missionRole.startDate);
    const endDate = DateUtil.formatDate(missionRole.endDate);
    const plannedStartDate = DateUtil.formatDate(missionRole.plannedStartDate);
    const plannedEndDate = DateUtil.formatDate(missionRole.plannedEndDate);
    const location = missionRole.location;

    return (
      <tr className="warning" key={key}>
        <td className="text-center">
          {missionRole.staffAssignments.length > 0 ?
           <ButtonGroup>
           <CollapseButton
           bsStyle="warning"
           text={missionRole.staffAssignments.length.toString()}
           onClick={() => this.collapseMissionRole(key)}
           isCollapsed={this.state.missionRoleCollapse.get(key)}
           />
           </ButtonGroup>
           :
           null}
        </td>
        <td>{profileType}</td>
        <td>{startDate}</td>
        <td>{endDate}</td>
        <td>{plannedStartDate}</td>
        <td>{plannedEndDate}</td>
        <td>{location}</td>
        <td></td>
        <td></td>
        <td className="text-center">
          <ActionButtons
           onEdit={() => { this.showMissionRoleForm(missionRole, mission); }}
           onNew={() => { this.showStaffAssignmentForm(null, missionRole); }}
          />
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
    const confirmedType = mission.confirmedType;
    const missionType = mission.missionType.missionType;
    const startDate = DateUtil.formatDate(mission.startDate);
    const endDate = DateUtil.formatDate(mission.endDate);

    return (
      <tr className="info" key={key}>
        <td className="text-center">
          {mission.missionRoles.length > 0 ?
           <ButtonGroup>
           <CollapseButton
           text={mission.missionRoles.length.toString()}
           onClick={() => this.collapseMission(key)}
           isCollapsed={this.state.missionCollapse.get(key)}
           />
           </ButtonGroup>
           :
           null}
        </td>
        <td>{description}</td>
        <td>{startDate}</td>
        <td>{endDate}</td>
        <td></td>
        <td></td>
        <td>{countries}</td>
        <td className="text-center">
          <ColorLabel
           text={confirmedType.confirmedType}
           color={confirmedType.colorCode}
          />
        </td>
        <td>{missionType}</td>
        <td className="text-center">
          <ActionButtons
           onEdit={() => { this.showMissionForm(mission); }}
           onNew={() => { this.showMissionRoleForm(null, mission); }}/>
        </td>
      </tr>
    );
  }

  renderRows() {
    var rows = [];
    this.props.detailedMissions.forEach((mission) => {
      const missionKey = mission.key;
      rows.push(this.renderMission(mission));

      if (!this.state.missionCollapse.get(missionKey)) {
        mission.missionRoles.forEach((missionRole) => {
          const missionRoleKey = missionRole.key;
          rows.push(this.renderMissionRole(missionRole, mission));

          if (!this.state.missionRoleCollapse.get(missionRoleKey)) {
            missionRole.staffAssignments.forEach((staffAssignment, index) => {
              rows.push(
                this.renderStaffAssignment(staffAssignment, missionRole, index === 0));
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
        <td colSpan="10">
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
    else if (this.props.detailedMissions.length === 0) {
      return this.renderEmptyRow(<b>No Results</b>);
    } else {
      return this.renderRows();
    }
  }

  render() {
    return (
      <div>
        <Button
         bsStyle="success"
         bsSize="sm"
         style={{marginBottom: 15}}
         onClick={() => { this.showMissionForm(); }}>
          <Glyphicon glyph="plus"/> New Mission
        </Button>
        <Table bordered striped hover condensed className="card-shadow">
          <thead>
            <tr>
              <th className="text-center">
                <CollapseButton
                onClick={this.collapseAll}
                isCollapsed={this.state.isCollapsed}
                />
              </th>
              <th>Name</th>
              <th className="col-md-1">Start Date</th>
              <th className="col-md-1">End Date</th>
              <th className="col-md-1">Planned Start Date</th>
              <th className="col-md-1">Planned End Date</th>
              <th>Location</th>
              <th>Confirmed Type</th>
              <th>Type</th>
              <th className="col-md-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableBody()}
          </tbody>
        </Table>

        <Modal
         bsSize="small"
         show={this.state.showMissionForm || this.props.showMissionForm}
         onHide={this.closeMissionForm}
         backdrop={false}>
          <Modal.Header closeButton>
            <Modal.Title>Mission Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <MissionForm
             onClose={this.closeMissionForm}
             onSave={this.onSaveMissionForm}
             mission={this.state.selectedMission}
             confirmedTypes={this.props.confirmedTypes}
             missionTypes={this.props.missionTypes}
             countries={this.props.countries}
            />
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
            <MissionRoleForm
            onSave={this.onSaveMissionRoleForm}
            onClose={this.closeMissionRoleForm}
            missionRole={this.state.selectedMissionRole}
            mission={this.state.selectedMission}
            missions={this.props.missions}
            profileTypes={this.props.profileTypes}
            />
          </Modal.Body>
        </Modal>

        <Modal bsSize="small"
               show={this.state.showStaffAssignmentForm}
               onHide={this.closeStaffAssignmentForm}
               backdrop={false}>
          <Modal.Header closeButton>
            <Modal.Title>Staff Assignment Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <StaffAssignmentForm
            onSave={this.onSaveStaffAssignmentForm}
            onClose={this.closeStaffAssignmentForm}
            staffAssignment={this.state.selectedStaffAssignment}
            missionRole={this.state.selectedMissionRole}
            staffList={this.props.staffListAll}
            missionRoles={this.props.missionRoles}
            confirmedTypes={this.props.confirmedTypes}
            profileTypes={this.props.profileTypes}
            />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

PlanningTable.propTypes = {
  missions: React.PropTypes.array.isRequired,
  detailedMissions: React.PropTypes.array.isRequired,
  confirmedTypes: React.PropTypes.array.isRequired,
  countries: React.PropTypes.array.isRequired,
  missionTypes: React.PropTypes.array.isRequired,
  loadingMissions: React.PropTypes.bool.isRequired
};
