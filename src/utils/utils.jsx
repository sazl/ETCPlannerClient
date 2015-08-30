
export default class Util {
  static commaJoin(arr) {
    const strArr = arr.map(String);
    return strArr.join(',');
  }

  static getField({ field='id', many=true, data=[]}) {
    if (many) {
      return data.map(x => { return x[field]; });
    } else {
      return data[field];
    }
  }
}
