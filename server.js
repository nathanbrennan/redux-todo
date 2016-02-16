var express = require('express'),
  app = express();

app.use(express.static(__dirname + '/web'));

app.listen(8080, function() {
  console.log('Server for "redux-todo" started: http://localhost:8080/');
});
