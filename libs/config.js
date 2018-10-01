const fs = require('fs');

const CONFIG_DIR = process.env.DIR_CONFIG || './configs/';

const config = {
  servicesConfig: {}
};

const readFileSync = (path) => JSON.parse(fs.readFileSync(path));

try {
  config.serverConfig = readFileSync(CONFIG_DIR + 'serverConfig.json');
  
  const services = fs.readdirSync(CONFIG_DIR + '/services');

  services.forEach(service => {
    const serviceDir = CONFIG_DIR + '/services/' + service + '/';

    config.servicesConfig[service] = {
      accessConfig: readFileSync(serviceDir + 'accessConfig.json'),
      apiConfig: readFileSync(serviceDir + 'apiConfig.json'),
      serverConfig: readFileSync(serviceDir + 'serverConfig.json')
    }
  });
} catch(e) {
  console.error(e);
  process.exit(1);
}

module.exports = config;