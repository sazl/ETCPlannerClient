var counter = 0;

export default class KeyUtil {
  static getKey(suffix='') {
    counter += 1;
    return 'key_' + suffix + String(counter);
  }
}
