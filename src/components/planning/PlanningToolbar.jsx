import React from 'react/addons';

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

import { Multiselect } from 'react-widgets';

import BaseComponent from 'components/BaseComponent';

import 'react-widgets/dist/css/react-widgets.css';

export default class Toolbar extends BaseComponent {

  constructor(props) {
    super(props);
    this._bind(
      'onFilterClick',
      'onSortClick',
      'onColumnClick'
    );
    this.state = {
      showFilters: false,
      showColumns: false,
      showSort: false
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
            <div className="col-xs-4">
              <PanelGroup className="card-shadow-small">
                <Panel header={<div>
                               Missions
                               <span className="label label-default medium pull-right">-</span>
                               </div>} collapsible >
                  <Multiselect placeholder="Missions" filter="contains"/>
                </Panel>
                <Panel header={<div>
                               Mission Roles
                               <span className="label label-success medium pull-right">-</span>
                               </div>} collapsible >
                  <Multiselect placeholder="Missions" filter="contains"/>
                </Panel>
                <Panel header={<div>
                               Staff Assignments
                               <span className="label label-info medium pull-right">-</span>
                               </div>} collapsible >
                  <Multiselect placeholder="Missions" filter="contains"/>
                </Panel>
              </PanelGroup>
            </div>

            <div className="col-xs-4">
              <PanelGroup className="card-shadow-small" >
                <Panel header={<div>
                               Mission Type
                               <span className="label label-success medium pull-right">-</span>
                               </div>} collapsible >
                  <Multiselect placeholder="Missions" filter="contains"/>
                </Panel>
                <Panel header={<div>
                               Confirmed Types
                               <span className="label label-default medium pull-right">-</span>
                               </div>} collapsible >
                  <Multiselect placeholder="Missions" filter="contains"/>
                </Panel>
                <Panel header={<div>
                               Profile Types
                               <span className="label label-success medium pull-right">-</span>
                               </div>} collapsible >
                  <Multiselect placeholder="Missions" filter="contains"/>
                </Panel>
              </PanelGroup>
            </div>
            <div className="col-xs-4">
              <PanelGroup className="card-shadow-small" >
                <Panel header={<div>
                               Duration
                               <span className="label label-default medium pull-right">-</span>
                               </div>} collapsible >
                  <Multiselect placeholder="Missions" filter="contains"/>
                </Panel>
                <Panel header={<div>
                               Countries
                               <span className="label label-info medium pull-right">-</span>
                               </div>} collapsible >
                  <Multiselect placeholder="Missions" filter="contains"/>
                </Panel>
                <Panel header={<div>
                               Staff
                               <span className="label label-info medium pull-right">-</span>
                               </div>} collapsible >
                  <Multiselect placeholder="Missions" filter="contains"/>
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
