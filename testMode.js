const config = require('./libs/config');
const Server = require('./server/Server');

const server = new Server(config.serverConfig, config.servicesConfig);

server.start();

require('./testMode/accountServer');
require('./testMode/gameServer');
require('./testMode/walletServer');