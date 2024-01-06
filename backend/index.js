require('events').EventEmitter.defaultMaxListeners = 15;
const express = require('express')
const app = express();

app.get('/home', (req, res) => {
    res.send({ message: 'Hello World'});
});

app.listen(30001, () => {
    console.log('App listening on port 3000');
});