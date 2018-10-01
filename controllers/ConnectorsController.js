const HttpRequestor = require('../connectors/HttpRequester');

class ConnectorsController {
  constructor(servicesConfig) {
    this.createRequesters(servicesConfig);
  }

  createRequesters(servicesConfig) {
    this.requestors = {};

    for (let serviceName in servicesConfig) {
      const serviceConfig = servicesConfig[serviceName];
      const serviceUri = this.createUri(serviceConfig.serverConfig);
      this[serviceName] = new HttpRequestor(serviceUri);
    }
  }

  createUri(serverConfig) {
    return serverConfig.protocol + '://' + serverConfig.host + ':' + serverConfig.port;
  }
}

module.exports = ConnectorsController;