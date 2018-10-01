const ConnectorsController = require('./ConnectorsController');

const errors = {
  serviceNotFound: {
    statusCode: 404,
    message: "service not found"
  },
  accessNotAllowed: {
    statusCode: 400,
    message: "access not allowed"
  },
  accessNotAllowed: {
    statusCode: 400,
    message: "incorrectRoute"
  }
};

class RequestController {
  constructor(servicesConfig) {
    this.servicesConfig = servicesConfig;
    this.services = Object.keys(servicesConfig);
    this.connectorsController = new ConnectorsController(servicesConfig);
  }
  
  async handleRequest(req) {
    const method = req.method;
    const body = req.body;
    const originalUrl = req.url;
    const serviceName = originalUrl.split('/')[1];

    /* validation start */
    if (!this.services.includes(serviceName)) {
      return errors.serviceNotFound;
    }

    const accessKey = req.headers.key;
    const accessSecret = req.headers.secret;

    const isAccessAllowed = this.checkAccess(serviceName, accessKey, accessSecret);

    if (!isAccessAllowed) {
      return errors.accessNotAllowed;
    }

    const routeSettings = this.servicesConfig[serviceName].apiConfig.routes.filter(route => route.method === method && route.url === originalUrl)[0];

    if (!routeSettings) {
      return errors.incorrectRoute;
    }

    /* validation end */

    const url = routeSettings.redirectUrl || originalUrl;

    return this.connectorsController[serviceName].request(url, method, body);
  }


  checkAccess(serviceName, accessKey, accessSecret) {
    return this.servicesConfig[serviceName].accessConfig[accessKey] &&
      this.servicesConfig[serviceName].accessConfig[accessKey] === accessSecret;
  }
}

module.exports = RequestController;