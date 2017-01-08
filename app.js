const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({obj: 'data'})
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log('Server listening on port ' + port);
});
