'use strict';
const https = require("https"),
    fs = require("fs");

const options = {
    key: fs.readFileSync("/etc/letsencrypt/live/hashrush.com/privkey.pem"),
    cert: fs.readFileSync("/etc/letsencrypt/live/hashrush.com/fullchain.pem")
};

var path = require('path');
var express = require('express');

var app = express();

app.use('/hashrush', express.static(path.join(__dirname,  'build')))

app.get('/ping', (req, res) => {
    return res.send('pong')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 3000);

// var server = app.listen(app.get('port'), function() {
//     console.log(path.join(__dirname + 'hashrush',  'build'));
// });

https.createServer(options, app).listen(3000);