import alt from '../alt';
import StaffService from 'services/StaffService';

class StaffActions {
  fetchAvailable() {
    this.dispatch();
    StaffService.getAvailable().then((staff) => {
      this.actions.updateAvailable(staff);
    });
  }

  updateAvailable(staff) {
    this.dispatch(staff);
  }

  fetchNotAvailable() {
    this.dispatch();
    StaffService.getNotAvailable().then((staff) => {
      this.actions.updateNotAvailable(staff);
    });
  }

  updateNotAvailable(staff) {
    this.dispatch(staff);
  }

  fetchBreakInService() {
    this.dispatch();
    StaffService.getBreakInService().then((staff) => {
      this.actions.updateBreakInService(staff);
    });
  }

  updateBreakInService(staff) {
    this.dispatch(staff);
  }
}

module.exports = alt.createActions(StaffActions);
