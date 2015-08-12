'use strict';

import React from 'react/addons';
import Router from 'react-router';

import {
  Panel
} from 'react-bootstrap';

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

export default class Planning extends BaseComponent {

  render() {
    return (
        <Panel collapsible defaultExpanded header="Planning">
          <PlanningToolbar />
          <hr></hr>
          <PlanningTable missions={data}/>
        </Panel>
    );
  }
}
