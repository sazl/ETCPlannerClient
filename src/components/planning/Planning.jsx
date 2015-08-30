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

import ProfileTypeActions from 'actions/ProfileTypeActions';
import ProfileTypeStore from 'stores/ProfileTypeStore';

import ConfirmedTypeActions from 'actions/ConfirmedTypeActions';
import ConfirmedTypeStore from 'stores/ConfirmedTypeStore';

import MissionTypeActions from 'actions/MissionTypeActions';
import MissionTypeStore from 'stores/MissionTypeStore';

import StaffActions from 'actions/StaffActions';
import StaffStore from 'stores/StaffStore';

import BaseComponent from 'components/BaseComponent';
import PlanningToolbar from 'components/planning/PlanningToolbar';
import PlanningTable from 'components/planning/PlanningTable';

// CSS
import 'styles/Planning.scss';


let RouteHandler = Router.RouteHandler;


@connectToStores
export default class Planning extends BaseComponent {

  static getStores() {
    return [
      MissionStore,
      ProfileTypeStore,
      MissionTypeStore,
      ConfirmedTypeStore,
      StaffStore
    ];
  }

  static getPropsFromStores() {
    const missionState = MissionStore.getState();
    return {
      loadingDetailedMissions: missionState.loadingDetailedMissions,
      detailedMissions: missionState.detailedMissions,
      profileTypes: ProfileTypeStore.getState().profileTypes,
      confirmedTypes: ConfirmedTypeStore.getState().confirmedTypes,
      missionTypes: MissionTypeStore.getState().missionTypes,
      staff: StaffStore.getState().staff
    };
  }

  componentWillMount() {
    MissionActions.fetchDetailedMissions();
    MissionActions.fetchMissions();
    StaffActions.fetchStaff();
    ProfileTypeActions.fetchProfileTypes();
    ConfirmedTypeActions.fetchConfirmedTypes();
    MissionTypeActions.fetchMissionTypes();
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={12}>
          <Panel collapsible defaultExpanded header="Planning">
            <PlanningToolbar profileTypes={this.props.profileTypes}
                             staff={this.props.staff}
                             confirmedTypes={this.props.confirmedTypes}
                             missionTypes={this.props.missionTypes}
                             missions={this.props.missions} />
            <hr></hr>
            <PlanningTable missions={this.props.detailedMissions}
                           confirmedTypes={this.props.confirmedTypes}
                           missionTypes={this.props.missionTypes}
                           loadingMissions={this.props.loadingDetailedMissions} />
          </Panel>
          </Col>
        </Row>
      </div>
    );
  }
}
