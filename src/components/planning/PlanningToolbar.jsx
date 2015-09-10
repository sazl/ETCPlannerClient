import React from 'react/addons';

import Immutable from 'immutable';

import connectToStores from 'alt/utils/connectToStores';

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
import MultiselectPanel from 'components/planning/MultiselectPanel';

import PlanningActions from 'components/planning/PlanningActions';
import PlanningToolbarActions from 'components/planning/PlanningToolbarActions';
import PlanningToolbarStore from 'components/planning/PlanningToolbarStore';

import MissionActions from 'actions/MissionActions';
import NotificationActions from 'actions/NotificationActions';

import Utils from 'utils/utils';
import DateUtils from 'utils/date';

import 'react-widgets/dist/css/react-widgets.css';


@connectToStores
export default class PlanningToolbar extends BaseComponent {

  constructor(props) {
    super(props);
    this._bind(
      'onFilterClick',
      'onSortClick',
      'onColumnClick',
      'onExportClick',
      'onClearFilterClick',
      'onViewTimelineClick',
      'onMissionsChange',
      'onProfileTypesChange',
      'onConfirmedTypesChange',
      'onMissionTypesChange',
      'onStartDateChange',
      'onEndDateChange',
      'onStaffListChange'
    );
    this.state = {
      showFilters: true,
      showColumns: false,
      showSort: false,
      showTimeline: false
    };
  }

  static getStores() {
    return [PlanningToolbarStore];
  }

  static getPropsFromStores() {
    return PlanningToolbarStore.getState();
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
    /* empty */
  }

  onNewMissionClick() {

  }

  onViewTimelineClick() {
    this.setState({
      showTimeline: !this.state.showTimeline
    }, PlanningActions.collapseTimeline);
  }

  filter() {
    PlanningToolbarActions.filter(
      PlanningToolbarStore.getFilters());
  }

  onClearFilterClick() {
    PlanningToolbarActions.clearFilters();
    this.filter();
  }

  onMissionsChange(missions) {
    PlanningToolbarActions.missionsChange(missions);
    this.filter();
  }

  onProfileTypesChange(profileTypes) {
    PlanningToolbarActions.profileTypesChange(profileTypes);
    this.filter();
  }

  onConfirmedTypesChange(confirmedTypes) {
    PlanningToolbarActions.confirmedTypesChange(confirmedTypes);
    this.filter();
  }

  onMissionTypesChange(missionTypes) {
    PlanningToolbarActions.missionTypesChange(missionTypes);
    this.filter();
  }

  onStartDateChange(date) {
    PlanningToolbarActions.startDateChange(date);
    this.filter();
  }

  onEndDateChange(date) {
    PlanningToolbarActions.endDateChange(date);
    this.filter();
  }

  onStaffListChange(staffList) {
    PlanningToolbarActions.staffListChange(staffList);
    this.filter();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <ButtonToolbar>
              <ButtonGroup bsSize="small">
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
                  <ButtonGroup bsSize="small">
                    <Input type="text" placeholder="Search"/>
                  </ButtonGroup>
                  <ButtonGroup bsSize="small" className="pull-right">
                    <Button bsStyle="success">
                      <Glyphicon glyph="plus" />
                      &nbsp; New Mission
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup bsSize="small" className="pull-right">
                    <Button bsStyle="info" onClick={this.onExportClick}>
                      <Glyphicon glyph="save"/>
                      &nbsp; Export
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup bsSize="small" className="pull-right">
                    <Button bsStyle={this.state.showTimeline ? "warning" : "primary"}
                            onClick={this.onViewTimelineClick}
                            active={this.state.showTimeline}>
                      <Glyphicon glyph={this.state.showTimeline ? "remove" : "time"}/>
                      &nbsp; Timeline
                    </Button>
                  </ButtonGroup>
            </ButtonToolbar>
          </div>
        </div>

        <Collapse in={this.state.showFilters}>
          <div className="row">
            <div className="col-xs-12">
              <legend>Filter</legend>
              <div className="row" style={{marginBottom: 15}}>
                <div className="col-xs-6">
                  <ButtonToolbar>
                    <ButtonGroup bsSize="small">
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
                    <MultiselectPanel
                       header="Missions"
                       placeholder="Missions"
                       value={this.props.missions.toArray()}
                       data={this.props.missionsList}
                       textField="description"
                       busy={this.props.missionsList.length === 0}
                       onChange={this.onMissionsChange}
                       filter="contains"/>
                    <MultiselectPanel
                       header="Mission Types"
                       placeholder="Mission Types"
                       value={this.props.missionTypes.toArray()}
                       data={this.props.missionTypesList}
                       textField="missionType"
                       busy={this.props.missionTypesList.length === 0}
                       onChange={this.onMissionTypesChange}
                       filter="contains"/>
                    <MultiselectPanel
                       header="Confirmed Types"
                       placeholder="Confirmed Types"
                       value={this.props.confirmedTypes.toArray()}
                       data={this.props.confirmedTypesList}
                       textField="confirmedType"
                       busy={this.props.confirmedTypesList.length === 0}
                       onChange={this.onConfirmedTypesChange}
                       filter="contains"/>
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
                             value={this.props.startDate}
                             time={false}
                             onChange={this.onStartDateChange} />
                          </div>
                        </div>
                        <div>
                          <label className="control-label">End Date</label>
                          <div>
                            <DateTimePicker
                             format="dd/MM/yyyy"
                             value={this.props.endDate}
                             time={false}
                             onChange={this.onEndDateChange} />
                          </div>
                        </div>
                      </form>
                    </Panel>
                    <MultiselectPanel
                       header="Staff"
                       placeholder="Staff"
                       value={this.props.staffList.toArray()}
                       data={this.props.staffListAll}
                       textField="fullName"
                       busy={this.props.staffListAll.length === 0}
                       filter="contains"
                       onChange={this.onStaffListChange}
                    />
                    <MultiselectPanel
                       header="Profile Types"
                       placeholder="Profile Types"
                       value={this.props.profileTypes.toArray()}
                       data={this.props.profileTypesList}
                       textField="profileType"
                       busy={this.props.profileTypesList.length === 0}
                       onChange={this.onProfileTypesChange}
                       filter="contains"
                    />
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
