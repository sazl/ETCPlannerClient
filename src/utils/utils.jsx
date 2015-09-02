
export default class Util {
  static commaJoin(arr) {
    const strArr = arr.map(String);
    return strArr.join(',');
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

  static getField({ field='id', many=true, data=[]}) {
    if (many) {
      return data.map(x => { return x[field]; });
    } else {
      return data[field];
    }
  }
}
