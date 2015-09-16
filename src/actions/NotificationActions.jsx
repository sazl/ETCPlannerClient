import alt from '../alt';

class NotificationActions {

  notify(notification) {
    notification.position = 'br';
    this.dispatch(notification);
    setTimeout(this.actions.clear, 500);
  }

  notifySuccess(message) {
    this.actions.notify({
      message: message,
      level: 'success'
    });
  }

  notifyInfo(message) {
    this.actions.notify({
      message: message,
      level: 'info'
    });
  }

  notifyWarning(message) {
    this.actions.notify({
      message: message,
      level: 'warning'
    });
  }

  notifyError(message) {
    this.actions.notify({
      message: message,
      level: 'error'
    });
  }

  clear() {
    this.dispatch();
  }
}

module.exports = alt.createActions(NotificationActions);
