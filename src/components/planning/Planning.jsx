'use strict';

import React from 'react/addons';
import Router from 'react-router';

import {
  Button,
  Glyphicon,
  FormControls,
  Input,
  Grid,
  Row,
  Col,
  Label,
  Panel,
  Table,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

import { DropdownList, Multiselect } from 'react-widgets';

import connectToStores from 'alt/utils/connectToStores';

import MissionActions from 'actions/MissionActions';
import MissionStore from 'stores/MissionStore';

import BaseComponent from 'components/BaseComponent';
import PlanningToolbar from 'components/planning/PlanningToolbar';
import PlanningTable from 'components/planning/PlanningTable';

// CSS
import 'styles/Planning.scss';


let RouteHandler = Router.RouteHandler;

let data = [{
  mission: 'NP',
  missionRoles: [{
    name: 'Coordinator',
    startDate: '2014-05-06',
    endDate: '2014-05-09',
    staffAssignments: [{
      staff: {
        name: 'Michael Dirksen'
      },
      startDate: '2014-05-07',
      endDate: '2014-05-08'
    }]
  }, {
    name: 'Assessment',
    startDate: '2014-02-23',
    endDate: '2014-11-25',
    staffAssignments: [{
      staff: {
        name: 'Oz'
      },
      startDate: '2014-03-06',
      endDate: '2014-05-07'
    }, {
      staff: {
        name: 'Aleks'
      },
      startDate: '2014-05-08',
      endDate: '2014-05-22'
    }]
  }]
}];

@connectToStores
export default class Planning extends BaseComponent {

  static getStores() {
    return [MissionStore];
  }

  static getPropsFromStores() {
    return MissionStore.getState();
  }

  componentWillMount() {
    MissionActions.fetchMissions();
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={12}>
          <Panel collapsible defaultExpanded header="Planning">
            <PlanningToolbar />
            <hr></hr>
            <PlanningTable missions={data}/>
          </Panel>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
          <table className="table table-bordered table-striped table-hover table-condensed">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Mission Type</th>
                <th>Confirmed Type</th>
                <th>Countries</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Profile Type</td>
                <td>Location</td>
                <td>Start Date</td>
                <td>End Date</td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="5">
                  <table className="table table-bordered table-striped table-hover table-condensed">
                    <thead>
                      <tr className="info">
                        <th>Profile Type</th>
                        <th>Location</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={8}>
          <div className="row">
            <div className="col-xs-6">
              <Panel header="Filter" collapsible defaultExpanded={true}>
                <form className="form-horizontal">
                  <fieldset>
                    <div className="form-group">
                      <label className="col-md-4 control-label" for="selectbasic">Select Basic</label>
                      <div className="col-md-8">
                        <select id="selectbasic" name="selectbasic" className="form-control">
                          <option value="1">Option one</option>
                          <option value="2">Option two</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="col-md-4 control-label" for="selectbasic">Select Basic</label>
                      <div className="col-md-8">
                        <select id="selectbasic" name="selectbasic" className="form-control">
                          <option value="1">Option one</option>
                          <option value="2">Option two</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="col-md-4 control-label" for="selectbasic">Select Basic</label>
                      <div className="col-md-8">
                        <select id="selectbasic" name="selectbasic" className="form-control">
                          <option value="1">Option one</option>
                          <option value="2">Option two</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="col-md-4 control-label" for="textinput">Text Input</label>
                      <div className="col-md-8">
                        <input id="textinput" name="textinput" type="text" placeholder="placeholder" className="form-control input-md"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="col-md-4 control-label" for="textinput">Text Input</label>
                      <div className="col-md-8">
                        <input id="textinput" name="textinput" type="text" placeholder="placeholder" className="form-control input-md"/>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </Panel>
            </div>
          </div>
          </Col>
        </Row>
      </div>
    );
  }
}
