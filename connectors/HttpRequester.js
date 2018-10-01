const request = require('request-promise');

class HttpRequester {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async request(resource, method, body) {
    const options = {
      uri: this.baseUrl + resource,
      method,
      body,
      json: true
    };
    
    return request(options);
  }
}

module.exports = HttpRequester;