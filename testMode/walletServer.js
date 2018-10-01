const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/wallet/balance', (req, res, next) => {
  res.send({
    server: "wallet",
    called: "GET /wallet/balance"
  });
});

app.get('/wallet/redirectedBalance', (req, res, next) => {
  res.send({
    server: "wallet",
    called: "GET /wallet/redirectedBalance"
  });
});

app.post('/wallet/deposit', (req, res, next) => {
  res.send({
    server: "wallet",
    called: "POST /wallet/deposit",
    body: req.body
  });
});

app.listen(7773, () => console.log('wallet run at 7773'));