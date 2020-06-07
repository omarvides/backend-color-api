const express = require('express');
const app = express();
const color = process.env.COLOR || '#3dffef';
const port = 3000;

app.get('/color', (req, res) => res.send(color));
app.listen(port, () => console.log(`Backend app listening in port ${port}`));
