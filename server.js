const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/frontend'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/frontend/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
    console.log('server start');
})