// Require our dependencies
var jquery = require('jquery');
var less = require('less');
var twitter = require('twitter');
var underscore = require('underscore');

// Create an express instance
var express = require('express');
var app = express();
var path = require('path');

app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/styles', express.static(__dirname + '/styles'));

// Load index.html
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// Start our server
var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

