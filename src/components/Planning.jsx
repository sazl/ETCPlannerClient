'use strict';

import React from 'react/addons';
import Router from 'react-router';
import TreeView from 'react-treeview';

import {
  Row,
  Col,
  Panel,
  Table,
  Button,
  DropdownButton,
  ButtonGroup,
  ButtonToolbar,
  ListGroup,
  ListGroupItem,
  MenuItem,
  Glyphicon,
  Well
} from 'react-bootstrap';

import StaffAssignmentTable from './StaffAssignmentTable';
import MissionRoleTable from './MissionRoleTable';
import MissionTable from './MissionTable';

// CSS
import '../styles/TreeView.scss';


let RouteHandler = Router.RouteHandler;

let data = [{
  mission: 'NP',
  missionRoles: [{
    name: 'Coordinator',
    start: '2014-05-06',
    end: '2014-05-09',
    staffAssignments: [{
      staff: {
        name: 'Michael Dirksen'
      },
      start: '2014-05-07',
      end: '2014-05-08'
    }]
  }, {
    name: 'Assessment',
    start: '2014-02-23',
    end: '2014-11-25',
    staffAssignments: [{
      staff: {
        name: 'Oz'
      },
      start: '2014-03-06',
      end: '2014-05-07'
    }, {
      staff: {
        name: 'Aleks'
      },
      start: '2014-05-08',
      end: '2014-05-22'
    }]
  }]
}];

export default class Planning extends React.Component {
  render() {
    return (
      <div>
        <Panel>
          <ButtonToolbar>
            <ButtonGroup>
              <DropdownButton title="Filter" bsStyle="primary">
              </DropdownButton>
            </ButtonGroup>
            <ButtonGroup>
              <DropdownButton title="Sort">
                <MenuItem>
                  Mission
                </MenuItem>
                <MenuItem>
                  Mission Role
                </MenuItem>
                <MenuItem>
                  Staff
                </MenuItem>
                <MenuItem>
                  Profile Type
                </MenuItem>
                <MenuItem>
                  Staff Type
                </MenuItem>
                <MenuItem>
                  Duration
                </MenuItem>
              </DropdownButton>
            </ButtonGroup>
          </ButtonToolbar>

          <hr></hr>

          <Table bordered striped hover condensed>
            <thead>
              <tr>
                <td></td>
                <td>Name</td>
                <td>Planned Start Date</td>
                <td>Planned Finish Date</td>
                <td>Planned Duration</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {data.map((mission, i) => {
                return (
                  <tr key={mission.mission + i} className="info">
                  <td className="text-center">
                  <Button bsSize="xs">
                  <Glyphicon glyph="chevron-down"/>
                  </Button>
                  </td>
                  <td>{mission.mission}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  </tr>
                  /*
                  {mission.missionRoles.map((missionRole, i) => {
                    return (
                      <table>
                      <tbody>
                      <tr>
                      <td>
                      <Button bsSize="xs">
                      <Glyphicon glyph="chevron-down"/>
                      </Button>
                      </td>
                      <td>{missionRole.name}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      </tr>
                      </tbody>
                      </table>
                    );
                  });
                      */
                );
               })}
            </tbody>
          </Table>

          <hr></hr>

        </Panel>
      </div>
    );
  }
}
