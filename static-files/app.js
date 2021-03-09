const express = require('express');
const app = express();
const PORT = 3000;

// The directory with static files to serve, should be in the same level as app.js
// Option A - without a route prefix
// app.use(express.static('public'));

//Option B - with a route prefix
app.use('/media', express.static('public'));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});