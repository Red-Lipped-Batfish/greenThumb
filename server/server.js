const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function (req, res) {
  console.log(req.body);
  res.send('recieved your request!');
});

app.get('/', (req, res) => {
  console.log('hello world');

  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

module.exports = app;
