import request from 'reqwest';

import { API_URL } from 'constants/APIConstants';

import DateUtils from 'utils/date';

const _token = 'g3moM57ZbUCXsCNfNxkSClqutUywrI'; //debug token
let _pendingRequests = {};

/* Abort requests that need to be refreshed immediately */
function _abortRequest(key) {
  if (key && _pendingRequests[key]) {
    _pendingRequests[key].abort();
    delete _pendingRequests[key];
  }
}

function _isDateField(fieldName) {
  return /.*[dD]ate.*/.test(fieldName);
}

function _interceptObject(obj) {
  for (const key in obj) {
    const value = obj[key];
    if (_isDateField(key)) {
      obj[key] = DateUtils.parseDate(value);
    } else if (Array.isArray(value)) {
      obj[key] = value.map(_interceptObject);
    } else if (!Array.isArray(value) && (value instanceof Object)) {
      obj[key] = _interceptObject(value);
    }
  }
  return obj;
}

function _interceptor(response) {
  if (Array.isArray(response)) {
    return response.map(_interceptObject);
  } else {
    return _interceptObject(response);
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
    },
    success: (response) => {
      _interceptor(response);
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
