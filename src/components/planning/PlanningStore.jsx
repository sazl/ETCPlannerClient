/*jshint unused: false*/

import alt from '../../alt';

import Immutable from 'immutable';

import PlanningActions from 'components/planning/PlanningActions';


class PlanningStore {

  constructor() {
    this.bindActions(PlanningActions);
    this.showTimeline = false;
  }

  onCollapseTimeline() {
    this.setState({
      showTimeline: !this.showTimeline
    });
  }
}

module.exports = alt.createStore(PlanningStore, 'PlanningStore');
