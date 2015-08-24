import request from 'reqwest';
import when from 'when';

import { API_URL } from 'constants/APIConstants';

class RequestService {
  constructor() {
    this.request = request;
    this.token = 'g3moM57ZbUCXsCNfNxkSClqutUywrI'; //debug token
  }

  get(url, params) {
    params = params || {};
    return this.request({
      url: API_URL + url,
      method: 'GET',
      data: params,
      type: 'json',
      crossOrigin: true,
      headers: {
        'Authorization': 'Bearer ' + this.token
      }
    });
  }
}

const requestService = new RequestService();

const getRequest = (path) => {
  return function (target, key, descriptor) {
    descriptor.value = (data) => { return requestService.get(path, data); };
    return descriptor;
  };
};

module.exports = {
  RequestService: requestService,
  getRequest: getRequest
};
