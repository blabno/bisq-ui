const express = require('express');
const path = require('path');
const port = 8888;
const app = express();

const publicDir = `${__dirname}/www`;
app.use(express.static(publicDir));
app.get('*', (req, res) => res.sendFile(path.resolve(publicDir, 'index.html')));

app.listen(port, () => console.info(`Server started on port ${port}`));
