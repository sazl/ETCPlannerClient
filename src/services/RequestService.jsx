import request from 'reqwest';
import when from 'when';

import { API_URL } from 'constants/APIConstants';

class RequestService {
  constructor() {
    this.request = request;
    this.token = 'g3moM57ZbUCXsCNfNxkSClqutUywrI'; //debug token
  }

  get(url, data) {
    data = data || {};
    return this.request({
      url: API_URL + url,
      method: 'GET',
      data: data,
      type: 'json',
      crossOrigin: true,
      headers: {
        'Authorization': 'Bearer ' + this.token
      }
    });
  }
}

export default new RequestService();
