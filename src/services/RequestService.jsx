import request from 'reqwest';

import { API_URL } from 'constants/APIConstants';
import Utils from 'utils/utils';
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

/* Automatically convert date strings to Date objects */
function _interceptObject(obj) {
  for (const key in obj) {
    const value = obj[key];
    if (DateUtils.isDateField(key)) {
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
    data: method === 'GET' ? params : JSON.stringify(params),
    type: 'json',
    contentType: 'application/json',
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

  static post({ url='', params={}, key=false }) {
    return _request({
      url: url,
      params: params,
      method: 'POST',
      key: key
    });
  }

  static put({ url='', params={}, key=false }) {
    return _request({
      url: url,
      params: params,
      method: 'PUT',
      key: key
    });
  }
}

const annotateRequest = (path, method='GET', abort=true) => {
  return function (target, key, descriptor) {
    descriptor.value = (data) => {
      if (!abort) {
        key = false;
      }
      return _request({
        url: path,
        params: data,
        method: method,
        key: key
      });
    };
    return descriptor;
  };
};

const annotateSaveRequest = (path, converter= (x) => { return x; }) => {
  return function (target, key, descriptor) {
    descriptor.value = (data) => {
      const entity = converter(data);
      if (entity.id) {
        const url = Utils.getEntityURL(
          path, entity.id);
        return RequestService.put({
          url: url,
          params: entity
        });
      } else {
        return RequestService.post({
          url: path,
          params: entity
        });
      }
    };
    return descriptor;
  };
};


module.exports = {
  RequestService: RequestService,
  request: annotateRequest,
  saveRequest: annotateSaveRequest
};
