'use strict';

var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

app.get('/hash', function(req, res) {
  res.sendfile(__dirname + '/views/hash.html');
});

app.get('*', function(req, res) {
  res.sendfile(__dirname + '/views/pushState.html');
});

app.listen(port);
console.log('Server Started on Port %s', port);
