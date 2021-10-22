const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: 1 }));
});

app.get('/failure', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  aaaa
  res.end(JSON.stringify({ a: 1 }));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});