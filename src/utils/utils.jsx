import DateUtils from 'utils/date';

export default class Util {
  static commaJoin(arr) {
    if (arr) {
      const strArr = arr.map(String);
      return strArr.join(',');
    } else {
      return '';
    }
  }

  static commaJoinField(arr, field='id') {
    return Util.commaJoin(
      this.getField({
        data: arr,
        many: true,
        field: field
      })
    );
  }

  static getEntityURL(url, id) {
    return url.replace(/(\/+)$/g, '/') + id + '/';
  }

  static getField({ field='id', many=true, data=[]}) {
    if (many) {
      return data.map(x => { return x[field]; });
    } else {
      return data[field];
    }
  }
}
