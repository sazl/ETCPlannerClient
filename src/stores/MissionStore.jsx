/*jshint unused: false*/

import alt from '../alt';

import MissionActions from 'actions/MissionActions';

import PlanningToolbarStore from 'components/planning/PlanningToolbarStore';


class MissionStore {

  constructor() {
    this.loadingMissions = false;
    this.loadingDetailedMissions = false;

    this.missions = [];
    this.detailedMissions = [];

    this.bindActions(MissionActions);
    this.exportPublicMethods({
      getMissions: this.getMissions,
      getDetailedMissions: this.getDetailedMissions
    });
  }

  onFetchMissions() {
    this.loadingMissions = true;
    this.missions = [];
  }

  onFetchDetailedMissions() {
    this.loadingDetailedMissions = true;
    this.detailedMissions = [];
  }

  onFetchFilteredMissions() {
    this.loadingDetailedMissions = true;
    this.detailedMissions = [];
  }

  onUpdateMissions(missions) {
    this.loadingMissions = true;
    this.missions = missions;
  }

  onUpdateDetailedMissions(missions) {
    this.loadingDetailedMissions = false;
    this.detailedMissions = missions;
  }

  onSaveMission(mission) {
    /* empty */
  }

  getMissions() {
    return this.missions;
  }

  getDetailedMissions() {
    return this.detailedMissions;
  }

}

module.exports = alt.createStore(MissionStore, 'MissionStore');
