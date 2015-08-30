import request from 'reqwest';

import { API_URL } from 'constants/APIConstants';

const _token = 'g3moM57ZbUCXsCNfNxkSClqutUywrI'; //debug token
let _pendingRequests = {};

/* Abort requests that need to be refreshed immediately */
function _abortRequest(key) {
  if (key && _pendingRequests[key]) {
    _pendingRequests[key].abort();
    delete _pendingRequests[key];
  }
}

function _request({ url='', params={}, method='GET', key=false }) {
  if (key) {
    _abortRequest(key);
  }
  const req = request({
    url: API_URL + url,
    method: method,
    data: params,
    type: 'json',
    crossOrigin: true,
    headers: {
      'Authorization': 'Bearer ' + _token
    }
  });
  if (key) {
    _pendingRequests[key] = req;
  }
  return req;
}

class RequestService {
  static get({ url='', params={}, key=false }) {
    return _request({
      url: url,
      params: params,
      key: key
    });

  }
}

const getRequest = (path, abort) => {
  return function (target, key, descriptor) {
    descriptor.value = (data) => {
      if (abort) {
        key = false;
      }
      return RequestService.get({
        url: path,
        params: data,
        key: key
      });
    };
    return descriptor;
  };
};

module.exports = {
  RequestService: RequestService,
  getRequest: getRequest
};
