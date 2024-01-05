require('events').EventEmitter.defaultMaxListeners = 15;
const express = require('express')
const app = express();

app.get('/home', (req, res) => {
    res.send({ message: 'Hello World'});
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});