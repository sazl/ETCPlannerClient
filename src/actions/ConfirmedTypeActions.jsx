import alt from '../alt';
import ConfirmedTypeService from 'services/ConfirmedTypeService';

class ConfirmedTypeActions {

  fetchConfirmedTypes(data={}) {
    this.dispatch();
    ConfirmedTypeService.getConfirmedTypes(data).then((confirmedTypes) => {
      this.actions.updateConfirmedTypes(confirmedTypes);
    });
  }

  updateConfirmedTypes(confirmedTypes) {
    this.dispatch(confirmedTypes);
  }
}

module.exports = alt.createActions(ConfirmedTypeActions);
