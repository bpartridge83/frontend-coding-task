'use strict';

var express = require('express'),
  app = express();

app.use(express.static(__dirname + '/public'));

app.get('/hash', function(req, res) {
  res.sendfile(__dirname + '/views/hash.html');
});

app.get('*', function(req, res) {
  res.sendfile(__dirname + '/views/pushState.html');
});

app.listen(process.env.PORT || 5000);
