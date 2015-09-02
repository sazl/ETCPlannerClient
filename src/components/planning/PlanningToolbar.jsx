import React from 'react/addons';

import Immutable from 'immutable';

import {
  Row,
  Col,
  Grid,
  Accordion,
  Panel,
  PanelGroup,
  Button,
  ButtonInput,
  ButtonGroup,
  ButtonToolbar,
  DropdownButton,
  MenuItem,
  Collapse,
  Glyphicon,
  Input
} from 'react-bootstrap';

import { Multiselect, DateTimePicker } from 'react-widgets';

import BaseComponent from 'components/BaseComponent';
import MissionActions from 'actions/MissionActions';

import NotificationActions from 'actions/NotificationActions';

import Utils from 'utils/utils';
import DateUtils from 'utils/date';

import 'react-widgets/dist/css/react-widgets.css';


export default class PlanningToolbar extends BaseComponent {

  constructor(props) {
    super(props);
    this._bind(
      'onFilterClick',
      'onSortClick',
      'onColumnClick',
      'onExportClick',
      'onClearFilterClick',
      'onMissionsChange',
      'onProfileTypesChange',
      'onConfirmedTypesChange',
      'onMissionTypesChange',
      'onStartDateChange',
      'onEndDateChange',
      'onStaffListChange'
    );
    this.state = {
      showFilters: false,
      showColumns: false,
      showSort: false,
      missions: Immutable.List(),
      profileTypes: Immutable.List(),
      confirmedTypes: Immutable.List(),
      missionTypes: Immutable.List(),
      startDate: null,
      endDate: null,
      staffList: Immutable.List()
    };
  }

  clearFilters() {
    this.setState({
      missions: Immutable.List(),
      profileTypes: Immutable.List(),
      confirmedTypes: Immutable.List(),
      missionTypes: Immutable.List(),
      startDate: null,
      endDate: null,
      staffList: Immutable.List()
    }, this.filterDetailedMissionsAction);
  }

  onFilterClick() {
    this.setState({
      showFilters: !this.state.showFilters
    });
  }

  onSortClick() {
    this.setState({
      showSort: !this.state.showSort
    });
  }

  onColumnClick() {
    this.setState({
      showColumns: !this.state.showColumns
    });
  }

  onExportClick() {
    NotificationActions.notifySuccess('hello');
  }

  onClearFilterClick() {
    this.clearFilters();
    NotificationActions.notifySuccess('Filters Cleared');
  }

  getFilters() {
    return Immutable.Map({
      'mission_id': Utils.commaJoinField(this.state.missions),
      'profile_type_id': Utils.commaJoinField(this.state.profileTypes),
      'confirmed_type_id': Utils.commaJoinField(this.state.confirmedTypes),
      'mission_type_id': Utils.commaJoinField(this.state.missionTypes),
      'start_date': DateUtils.formatISO(this.state.startDate),
      'end_date': DateUtils.formatISO(this.state.endDate),
      'staff_index': Utils.commaJoinField(this.state.staffList, 'index')
    });
  }

  filterDetailedMissionsAction() {
    MissionActions.fetchDetailedMissions(this.getFilters());
  }

  onMissionsChange(missions) {
    this.setState({
      missions: Immutable.List(missions)
    }, this.filterDetailedMissionsAction);
  }

  onProfileTypesChange(profileTypes) {
    this.setState({
      profileTypes: Immutable.List(profileTypes)
    }, this.filterDetailedMissionsAction);
  }

  onConfirmedTypesChange(confirmedTypes) {
    this.setState({
      confirmedTypes: Immutable.List(confirmedTypes)
    }, this.filterDetailedMissionsAction);
  }

  onMissionTypesChange(missionTypes) {
    this.setState({
      missionTypes: Immutable.List(missionTypes)
    }, this.filterDetailedMissionsAction);
  }

  onStartDateChange(date) {
    this.setState({
      startDate: date
    }, this.filterDetailedMissionsAction);
  }

  onEndDateChange(date) {
    this.setState({
      endDate: date
    }, this.filterDetailedMissionsAction);
  }

  onStaffListChange(staffList) {
    this.setState({
      staffList: Immutable.List(staffList)
    }, this.filterDetailedMissionsAction);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <ButtonToolbar>
              <ButtonGroup>
                <Button bsStyle={this.state.showFilters ? "warning" : "primary"}
                        onClick={this.onFilterClick}
                        active={this.state.showFilters}>
                  <Glyphicon glyph={this.state.showFilters ? "remove" : "filter"}/>
                  &nbsp; Filter
                </Button>
              </ButtonGroup>
              {/*
                  <ButtonGroup>
                  <Button bsStyle={this.state.showSort ? "warning" : "default"}
                  onClick={this.onSortClick}
                  active={this.state.showSort}>
                  <Glyphicon glyph={this.state.showSort ? "remove" : "sort-by-attributes"}/>
                  &nbsp; Sort
                  </Button>
                  </ButtonGroup>
                  <ButtonGroup>
                  <Button bsStyle={this.state.showColumns ? "warning" : "grey"}
                  onClick={this.onColumnClick}
                  active={this.state.showColumns}>
                  <Glyphicon glyph={this.state.showColumns ? "remove" : "th-list"}/>
                  &nbsp; Columns
                  </Button>
                  </ButtonGroup>
                */}
                  <ButtonGroup>
                    <Input type="text" placeholder="Search"/>
                  </ButtonGroup>
                  <ButtonGroup className="pull-right">
                    <Button bsStyle="success">
                      <Glyphicon glyph="plus" />
                      &nbsp; New Mission
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup className="pull-right">
                    <Button bsStyle="info" onClick={this.onExportClick}>
                      <Glyphicon glyph="save"/>
                      &nbsp; Export
                    </Button>
                  </ButtonGroup>
            </ButtonToolbar>
          </div>
        </div>

        <Collapse in={this.state.showFilters}>
          <div className="row">
            <legend>Filter</legend>
            <div className="col-xs-12">
              <div className="row" style={{marginBottom: 15}}>
                <div className="col-xs-6">
                  <ButtonToolbar>
                    <ButtonGroup>
                      <Button bsStyle="danger" onClick={this.onClearFilterClick}>
                        <Glyphicon glyph="remove"/>
                        &nbsp; Clear Filters
                      </Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6">
                  <PanelGroup className="card-shadow-small" >
                    <Panel header={<div>
                                   Missions
                                   <span className="label label-default medium pull-right">
                                   {this.state.missions.size}
                                   </span>
                                   </div>} collapsible >
                      <Multiselect
                       placeholder="Missions"
                       value={this.state.missions.toArray()}
                       data={this.props.missions}
                       textField="description"
                       busy={this.props.missions.length === 0}
                       onChange={this.onMissionsChange}
                       filter="contains"/>
                    </Panel>
                    <Panel header={<div>
                                   Mission Type
                                   <span className="label label-default medium pull-right">
                                   {this.state.missionTypes.size}
                                   </span>
                                   </div>} collapsible >
                      <Multiselect
                       placeholder="Mission Types"
                       value={this.state.missionTypes.toArray()}
                       data={this.props.missionTypes}
                       textField="missionType"
                       busy={this.props.missionTypes.length === 0}
                       onChange={this.onMissionTypesChange}
                       filter="contains"/>
                    </Panel>
                    <Panel header={<div>
                                   Confirmed Types
                                   <span className="label label-default medium pull-right">
                                   {this.state.confirmedTypes.size}
                                   </span>
                                   </div>} collapsible>
                      <Multiselect
                       placeholder="Confirmed Types"
                       value={this.state.confirmedTypes.toArray()}
                       data={this.props.confirmedTypes}
                       textField="confirmedType"
                       busy={this.props.confirmedTypes.length === 0}
                       onChange={this.onConfirmedTypesChange}
                       filter="contains"/>
                    </Panel>
                    <Panel header={<div>
                                   Profile Types
                                   <span className="label label-default medium pull-right">
                                   {this.state.profileTypes.size}
                                   </span>
                                   </div>} collapsible >
                      <Multiselect
                       placeholder="Profile Types"
                       value={this.state.profileTypes.toArray()}
                       data={this.props.profileTypes}
                       textField="profileType"
                       busy={this.props.profileTypes.length === 0}
                       onChange={this.onProfileTypesChange}
                       filter="contains"/>
                    </Panel>
                  </PanelGroup>
                </div>
                <div className="col-xs-6">
                  <PanelGroup className="card-shadow-small" >
                    <Panel header={<div>
                                   Duration
                                   <span className="label label-default medium pull-right">
                                   -
                                   </span>
                                   </div>} collapsible >
                      <form>
                        <div className="form-group">
                          <label className="control-label">Start Date</label>
                          <div>
                            <DateTimePicker
                             format="dd/MM/yyyy"
                             value={this.state.startDate}
                             time={false}
                             onChange={this.onStartDateChange} />
                          </div>
                        </div>
                        <div>
                          <label className="control-label">End Date</label>
                          <div>
                            <DateTimePicker
                             format="dd/MM/yyyy"
                             value={this.state.endtDate}
                             time={false}
                             onChange={this.onEndDateChange} />
                          </div>
                        </div>
                      </form>
                    </Panel>
                    <Panel header={<div>
                                   Countries
                                   <span className="label label-default medium pull-right">
                                   -
                                   </span>
                                   </div>} collapsible >
                      <Multiselect
                       placeholder="Countries"
                       filter="contains"
                      />
                    </Panel>
                    <Panel header={<div>
                                   Staff
                                   <span className="label label-default medium pull-right">
                                   {this.state.staffList.size}
                                   </span>
                                   </div>} collapsible >
                      <Multiselect
                       placeholder="Staff"
                       value={this.state.staffList.toArray()}
                       data={this.props.staffList}
                       textField="fullName"
                       busy={this.props.staffList.length === 0}
                       filter="contains"
                       onChange={this.onStaffListChange}
                      />
                    </Panel>
                    <Panel header={<div>
                                   Languages
                                   <span className="label label-default medium pull-right">
                                   -
                                   </span>
                                   </div>} collapsible >
                      <Multiselect
                       placeholder="Languages"
                       filter="contains"
                      />
                    </Panel>
                  </PanelGroup>
                </div>
              </div>
            </div>
          </div>
        </Collapse>

        <Collapse in={this.state.showSort}>
          <div className="row">
            <legend>Sort</legend>
          </div>
        </Collapse>

        <Collapse in={this.state.showColumns}>
          <div className="row">
            <legend>Columns</legend>
          </div>
        </Collapse>
      </div>
    );
  }
}

PlanningToolbar.propTypes = {
  profileTypes: React.PropTypes.array
};
