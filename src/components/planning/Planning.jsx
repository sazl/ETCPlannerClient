'use strict';

import React from 'react/addons';
import Router from 'react-router';

import {
  Collapse,
  Grid,
  Row,
  Col,
  Panel
} from 'react-bootstrap';

import { DropdownList, Multiselect } from 'react-widgets';

import connectToStores from 'alt/utils/connectToStores';

import MissionActions from 'actions/MissionActions';
import MissionStore from 'stores/MissionStore';

import ProfileTypeActions from 'actions/ProfileTypeActions';
import ProfileTypeStore from 'stores/ProfileTypeStore';

import ConfirmedTypeActions from 'actions/ConfirmedTypeActions';
import ConfirmedTypeStore from 'stores/ConfirmedTypeStore';

import CountryActions from 'actions/CountryActions';
import CountryStore from 'stores/CountryStore';

import MissionTypeActions from 'actions/MissionTypeActions';
import MissionTypeStore from 'stores/MissionTypeStore';

import MissionRoleActions from 'actions/MissionRoleActions';
import MissionRoleStore from 'stores/MissionRoleStore';

import StaffActions from 'actions/StaffActions';
import StaffStore from 'stores/StaffStore';

import PlanningStore from 'components/planning/PlanningStore';

import BaseComponent from 'components/BaseComponent';

import PlanningToolbar from 'components/planning/PlanningToolbar';
import PlanningToolbarStore from 'components/planning/PlanningToolbarStore';

import PlanningTable from 'components/planning/PlanningTable';
import PlanningTimeline from 'components/planning/PlanningTimeline';


// CSS
import 'styles/Planning.scss';


let RouteHandler = Router.RouteHandler;


@connectToStores
export default class Planning extends BaseComponent {

  static getStores() {
    return [
      MissionStore,
      ProfileTypeStore,
      CountryStore,
      MissionTypeStore,
      MissionRoleStore,
      ConfirmedTypeStore,
      StaffStore,
      PlanningStore,
      PlanningToolbarStore
    ];
  }

  static getPropsFromStores() {
    return {
      loadingDetailedMissions: MissionStore.getState().loadingDetailedMissions,
      detailedMissions: MissionStore.getState().detailedMissions,
      missions: MissionStore.getState().missions,
      profileTypes: ProfileTypeStore.getState().profileTypes,
      confirmedTypes: ConfirmedTypeStore.getState().confirmedTypes,
      countries: CountryStore.getState().countries,
      missionTypes: MissionTypeStore.getState().missionTypes,
      missionRoles: MissionRoleStore.getState().missionRoles,
      staffList: StaffStore.getState().staff,
      showTimeline: PlanningStore.getState().showTimeline,
      startDate: PlanningToolbarStore.getState().startDate,
      endDate: PlanningToolbarStore.getState().endDate
    };
  }

  componentWillMount() {
    MissionActions.fetchMissions();
    ProfileTypeActions.fetchProfileTypes();
    ConfirmedTypeActions.fetchConfirmedTypes();
    CountryActions.fetchCountries();
    MissionTypeActions.fetchMissionTypes();
    MissionRoleActions.fetchMissionRoles();
    StaffActions.fetchStaff();
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={12}>
          <Panel collapsible defaultExpanded header="Planning">
            <PlanningToolbar
             profileTypesList={this.props.profileTypes}
             confirmedTypesList={this.props.confirmedTypes}
             countriesList={this.props.countries}
             missionTypesList={this.props.missionTypes}
             missionsList={this.props.missions}
             staffListAll={this.props.staffList}
            />
            <Collapse in={this.props.showTimeline}>
              <div>
                <hr/>
                <PlanningTimeline
                 missions={this.props.detailedMissions}
                 startDate={this.props.startDate}
                 endDate={this.props.endDate}
                />
              </div>
            </Collapse>
            <hr/>
            <PlanningTable
             detailedMissions={this.props.detailedMissions}
             loadingMissions={this.props.loadingDetailedMissions}
             missions={this.props.missions}
             missionRoles={this.props.missionRoles}
             confirmedTypes={this.props.confirmedTypes}
             profileTypes={this.props.profileTypes}
             countries={this.props.countries}
             missionTypes={this.props.missionTypes}
             staffListAll={this.props.staffList}
            />
            <hr/>
          </Panel>
          </Col>
        </Row>
      </div>
    );
  }
}
