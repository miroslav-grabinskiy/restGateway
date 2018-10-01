const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/account/info', (req, res, next) => {
  res.send({
    server: "account",
    called: "GET /account/info"
  });
});

app.post('/account/create', (req, res, next) => {
  res.send({
    server: "account",
    called: "POST /account/create",
    body: req.body
  });
});

app.listen(7771, () => console.log('account run at 7771'));