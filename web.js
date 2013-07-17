var express = require('express');

var app = express.createServer(express.logger());

var buffer = fs.readFileSync('index.html');

var indexString = Buffer.toString(buffer);

app.get('/', function(request, response) {
  response.send(indexString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
