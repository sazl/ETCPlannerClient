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
      'onMissionsChange',
      'onProfileTypesChange',
      'onConfirmedTypesChange',
      'onMissionTypesChange',
      'onStartDateChange',
      'onEndDateChange'
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
      endDate: null
    };
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

  getFilters() {
    return Immutable.Map({
      'mission_id': Utils.commaJoin(this.state.missions),
      'profile_type_id': Utils.commaJoin(this.state.profileTypes),
      'confirmed_type_id': Utils.commaJoin(this.state.confirmedTypes),
      'mission_type_id': Utils.commaJoin(this.state.missionTypes),
      'start_date': this.state.startDate,
      'end_date': this.state.endDate
    });
  }

  filterDetailedMissionsAction() {
    MissionActions.fetchDetailedMissions(this.getFilters());
  }

  onMissionsChange(missions) {
    const missionIds = Utils.getField({ data: missions });
    this.setState({
      missions: missionIds
    }, this.filterDetailedMissionsAction);
  }

  onProfileTypesChange(profileTypes) {
    const profileTypeIds = Utils.getField({ data: profileTypes });
    this.setState({
      profileTypes: profileTypeIds
    }, this.filterDetailedMissionsAction);
  }

  onConfirmedTypesChange(confirmedTypes) {
    const confirmedTypeIds = Utils.getField({ data: confirmedTypes });
    this.setState({
      confirmedTypes: confirmedTypeIds
    }, this.filterDetailedMissionsAction);
  }

  onMissionTypesChange(missionTypes) {
    const missionTypeIds = Utils.getField({ data: missionTypes });
    this.setState({
      missionTypes: missionTypeIds
    }, this.filterDetailedMissionsAction);
  }

  onStartDateChange(date) {
    this.setState({
      startDate: DateUtils.formatISO(date)
    }, this.filterDetailedMissionsAction);
  }

  onEndDateChange(date) {
    this.setState({
      endDate: DateUtils.formatISO(date)
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
                <Button bsStyle="info">
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
            <div className="col-xs-6">
              <PanelGroup className="card-shadow-small" >
                <Panel header={<div>
                               Missions
                               <span className="label label-default medium pull-right">-</span>
                               </div>} collapsible >
                  <Multiselect placeholder="Missions"
                               onChange={this.onMissionsChange}
                               filter="contains"/>
                </Panel>
                <Panel header={<div>
                               Mission Type
                               <span className="label label-success medium pull-right">-</span>
                               </div>} collapsible >
                  <Multiselect placeholder="Mission Types"
                               data={this.props.missionTypes}
                               textField="missionType"
                               onChange={this.onMissionTypesChange}
                               filter="contains"/>
                </Panel>
                <Panel header={<div>
                               Confirmed Types
                               <span className="label label-default medium pull-right">-</span>
                               </div>} collapsible>
                  <Multiselect placeholder="Confirmed Types"
                               data={this.props.confirmedTypes}
                               textField="confirmedType"
                               busy={this.props.confirmedTypes.length === 0}
                               onChange={this.onConfirmedTypesChange}
                               filter="contains"/>
                </Panel>
                <Panel header={<div>
                               Profile Types
                               <span className="label label-success medium pull-right">-</span>
                               </div>} collapsible >
                  <Multiselect placeholder="Profile Types"
                               data={this.props.profileTypes}
                               textField="profileType"
                               onChange={this.onProfileTypesChange}
                               filter="contains"/>
                </Panel>
              </PanelGroup>
            </div>
            <div className="col-xs-6">
              <PanelGroup className="card-shadow-small" >
                <Panel header={<div>
                               Duration
                               <span className="label label-default medium pull-right">-</span>
                               </div>} collapsible >
                  <form>
                    <div className="form-group">
                      <label className="control-label">Start Date</label>
                      <div>
                        <DateTimePicker format="dd/MM/yyyy" onChange={this.onStartDateChange} />
                      </div>
                    </div>
                    <div>
                      <label className="control-label">End Date</label>
                      <div>
                        <DateTimePicker format="dd/MM/yyyy" onChange={this.onEndDateChange} />
                      </div>
                    </div>
                  </form>
                </Panel>
                <Panel header={<div>
                               Countries
                               <span className="label label-info medium pull-right">-</span>
                               </div>} collapsible >
                  <Multiselect placeholder="Countries" filter="contains"/>
                </Panel>
                <Panel header={<div>
                               Staff
                               <span className="label label-info medium pull-right">-</span>
                               </div>} collapsible >
                  <Multiselect placeholder="Staff"
                               data={this.props.staff}
                               textField="fullName"
                               filter="contains"/>
                </Panel>
                <Panel header={<div>
                               Languages
                               <span className="label label-info medium pull-right">-</span>
                               </div>} collapsible >
                  <Multiselect placeholder="Languages" filter="contains"/>
                </Panel>
              </PanelGroup>
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
