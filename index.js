import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/api/unsecured', function(req, res) {
  res.json({ message: 'This is an unsecured endpoint payload' });
});

app.get('/api/user', function(req, res) {
  res.json({ message: 'This is an USER endpoint payload' });
});

app.get('/api/admin', function(req, res) {
  res.json({ message: 'This is an ADMIN endpoint payload' });
});

app.listen(3000, err => {
  if (err) {
    console.error(err);
  }
  {
    console.log(`APP Listen to port : 3000`);
  }
});
