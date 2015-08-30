var counter = 0;

export default class KeyUtil {
  static getKey() {
    counter += 1;
    return 'key_' + String(counter);
  }
}
