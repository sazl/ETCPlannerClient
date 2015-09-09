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

  static format(date, fmt) {
    const fmtDate = moment(date);
    if (fmtDate.isValid()) {
      return fmtDate.format(fmt);
    } else {
      return '';
    }
  }

  static isDateField(fieldName) {
    return /.*[dD]ate.*/.test(fieldName);
  }

  static formatReadable(date) {
    return this.format(date, 'MMM Do, YYYY');
  }

  static formatDate(date) {
    return this.format(date, 'DD-MM-YYYY');
  }

  static formatISO(date) {
    return this.format(date, 'YYYY-MM-DD');
  }

  static formatISOFull(date) {
    return this.format(date);
  }

  static monthRange(date) {
    const start = moment(date).startOf('month').toDate();
    const end = moment(date).endOf('month').toDate();
    return { start: start, end: end };
  }

  static now() {
    return moment().toDate();
  }
}
