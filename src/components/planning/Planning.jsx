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

@connectToStores
export default class Planning extends BaseComponent {

  static getStores() {
    return [MissionStore];
  }

  static getPropsFromStores() {
    return MissionStore.getState();
  }

  componentWillMount() {
    MissionActions.fetchDetailedMissions();
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={12}>
          <Panel collapsible defaultExpanded header="Planning">
            <PlanningToolbar />
            <hr></hr>
            <PlanningTable missions={this.props.missions}/>
          </Panel>
          </Col>
        </Row>
      </div>
    );
  }
}
