var http = require('http');

var server = new http.Server(function(req, res) {
  var ipaddress, lang, software;
  var head = req.headers;
  lang = head["accept-language"].match(/([^,]*),/)[1];
  software = head["user-agent"].match(/\(([^()]*)\)/)[1];
  res.end(JSON.stringify({ "ipaddress": head["x-forwarded-for"],"language": lang,"software":software }));
});

server.listen(8080);

/*var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});*/

