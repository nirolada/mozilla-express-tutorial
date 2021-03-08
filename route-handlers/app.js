const express = require('express');
const app = express();
const PORT = 3000;

const wiki = require('./wiki.js');

app.use('/wiki', wiki);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
