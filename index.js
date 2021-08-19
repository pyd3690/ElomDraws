const express = require('express')
const app = express();
const port = 8000;

app.use('/', express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello ElomDraws!')
});

app.listen(port, () => {
  console.log(`ElomDraws Server listening on port ${port}!`)
});