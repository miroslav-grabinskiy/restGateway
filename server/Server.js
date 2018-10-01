const app = require('express')();
const RequestController = require('../controllers/requestController');
const bodyParser = require('body-parser');

class Server {
  constructor(config, servicesConfig) {
    this.config = config;
    this.servicesConfig = servicesConfig;
    this.requestController = new RequestController(servicesConfig);
    this.initRoutes(servicesConfig);
  }

  initRoutes(servicesConfig) {
    app.use(bodyParser.json());
    
    app.all('*', async (req, res, next) => {
      try {
        const response = await this.requestController.handleRequest(req);
        res.send(response);
      } catch(error) {
        const statusCode = error.statusCode || 500;

        console.log(error);
        res.status(statusCode).send(error);
      }
    });
  }

  start() {
    app.listen(this.config.port, this.config.host, () => {
      console.log("server listen host: " + this.config.host + 'port: ' + this.config.port);
    });
  }
}

module.exports = Server;