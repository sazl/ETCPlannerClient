import moment from 'moment';

export default class DateUtil {
  static parseDate(str) {
    const result = moment(str).toDate();
    if (moment(result).isValid()) {
      return result;
    } else {
      return null;
    }
  }

  static formatDate(date) {
    const fmtDate = moment(date);
    if (fmtDate.isValid()) {
      return fmtDate.format('DD-MM-YYYY');
    } else {
      return '';
    }
  }

  static formatISO(date) {
    const fmtDate = moment(date);
    if (fmtDate.isValid()) {
      return fmtDate.format('YYYY-MM-DD');
    } else {
      return '';
    }
  }

  static now() {
    return moment();
  }
}
