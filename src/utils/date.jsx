import moment from 'moment';

export default class DateUtil {
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
}
