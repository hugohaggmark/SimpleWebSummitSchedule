var express = require('express');
var app = express();

app.use(express.static('public'));
var appPort = Number(process.env.PORT || 2013);
var server = app.listen(appPort, function() {
  var host = server.address().address;

  console.log('Example app listening at http://%s:%s', host, appPort);
});
