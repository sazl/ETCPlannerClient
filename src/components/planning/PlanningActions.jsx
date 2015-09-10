import alt from '../../alt';

import Immutable from 'immutable';

class PlanningActions {

  collapseTimeline() {
    this.dispatch();
  }

}

module.exports = alt.createActions(PlanningActions);
