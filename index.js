import express from 'express';

const app = express();

app.get('/', function(req, res) {
  res.send('Welcome to home page');
});

app.listen(3000, err => {
  if (err) {
    console.error(err);
  }
  {
    console.log(`APP Listen to port : 3000`);
  }
});
