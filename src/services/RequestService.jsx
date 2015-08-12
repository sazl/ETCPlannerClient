import request from 'reqwest';
import when from 'when';

let requestService = null;

class RequestService {
  constructor() {
    super();
    this.request = request;
    this.token = 'g3moM57ZbUCXsCNfNxkSClqutUywrI'; //debug token
  }

  get(url, data) {
    return this.request({
      url: url,
      method: 'get',
      data: data,
      crossOrigin: true,
      headers: {
        'Authorization', 'Bearer ' + this.token
      }
    });
  }
}
