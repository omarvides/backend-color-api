const express = require('express');
const cors = require('cors');

const port = 3000;
const app = express();
const color = process.env.COLOR || '#0099cc';

app.use(cors());
app.get('/color', (req, res) =>
  res.json({
    values: [color, '#b1f150', '#a77d46', '#74c4db', '#fbbdd3', '#9b0bad'],
  })
);
app.listen(port, () => console.log(`Backend app listening in port ${port}`));
