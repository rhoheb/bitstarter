var express = require('express');
var fs = require('fs');
var infile = "index.html";
var app = express.createServer(express.logger());

var buf = new Buffer(100);

buf.write(fs.readFileSync(infile), "utf-8");

app.get('/', function(request, response) {
  response.send(buf.toString('utf-8');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
