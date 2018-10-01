# How to start
1) clone project
2) run `npm install`
3) run `npm start` (or `npm run startTestMode` for testMode)

### configs

```
   serverConfig.json
   services/
```

services directory exists directory for each service with configs for this gateway
you can add your service - create directory with files in this directory

```
    accessConfig.json
    apiConfig.json
    serverConfig.json
```

accessesConfig keep key/secret pairs for access to each service
serverConfig - some simple server options

apiConfig
```
{
  "routes": [{
    "method": "GET",
    "url": "/wallet/balance",
    "redirectUrl": "/wallet/redirectedBalance/"
  }, {
    "method": "POST",
    "url": "/wallet/deposit"
  }]
}
```

you can add new route with params
`method` and `url`
you can add optional parameter `redirectUrl` for redirect


### features in next version
schemas for configs,
config validation