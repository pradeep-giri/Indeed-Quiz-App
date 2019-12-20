const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/mean-project'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/mean-project/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
    console.log('server start');
})