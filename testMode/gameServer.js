const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/game/stat', (req, res, next) => {
  res.send({
    server: "game",
    called: "GET /game/stat"
  });
});

app.post('/game/play', (req, res, next) => {
  res.send({
    server: "game",
    called: "POST /game/play",
    body: req.body
  });
});

app.listen(7772, () => console.log('game run at 7772'));