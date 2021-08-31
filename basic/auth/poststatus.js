const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//doi voi su dung Postman
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
}); //khai bao header ho tro react


app.post('/status', (req, res) => {
  const response = {
    userId: 1,
    desc: (req.body).desc
  }

    console.log('Got body:', req.body);
    res.send(response);
});

app.listen(8081, () => console.log(`Started server at http://localhost:8081!`));