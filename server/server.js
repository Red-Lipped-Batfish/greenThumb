const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;
const routes = require('./routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.post('/', function(req, res) {
  console.log(req.body);
  res.send('recieved your request!');
});

app.get('/', (req, res) => {
  // console.log('hello world');
  // fetch('https://trefle.io/api/plants/?token=NGI4S1VkZzBtOUdOMGZ6TEsydjNQUT09&common_name=blackwood')
  //   .then(res => res.json())
  //   .then(data => console.log(data[0].id))
  res.sendFile(path.join(__dirname, '../index.html'));
});



app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

module.exports = app;
