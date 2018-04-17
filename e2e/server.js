const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const _ = require('lodash');

const port = 8060;
const app = express();

const db = {};

const response = method => (req, res) => res
  .send(_.get(db, `${method}[${req.url}].payload`))
  .status(_.get(db, `${method}[${req.url}].status`));

app.use(bodyParser.json());
app.use(cors());

app.get('/api/v1/*', response('get'));
app.post('/api/v1/*', response('post'));
app.put('/api/v1/*', response('put'));
app.delete('/api/v1/*', response('delete'));

app.post('/stub', (req, res) => {
  const {method, url, status, payload} = req.body;
  _.set(db, `${method}[${url}]`, {status, payload});
  res.sendStatus(200);
});

app.listen(port, () => console.info(`Server started on port ${port}`));
