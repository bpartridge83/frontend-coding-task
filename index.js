'use strict';

var express = require('express'),
	app = express();

app.use(express.static(__dirname + '/public'));

app.all('*', function (req, res) {
  res.sendfile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 5000);
