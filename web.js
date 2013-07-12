var express = require('express');
var fs = require('fs');
var infile = 'index.html';
var app = express.createServer(express.logger());

var data = fs.readFileSync(infile);

app.get('/', function(request, response) {
  response.send(data.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
