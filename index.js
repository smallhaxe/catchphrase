// index.js

var express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
  db = require('./models');

var app = express();

// make views accessible via a variable:
var views = path.join(process.cwd(), 'public/html');

//
// INCLUDE NEW VARIABLES BELOW:
//

var phrases = [
                'command line',
                'closure',
                'callback',
              ];


// make static assets accessible to the app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('bower_components'));

app.get('/', function(req, res){
  // make index.html accessible via a variable:
  var homePath = path.join(views, 'index.html');
  res.sendFile(homePath);
});


//
// INCLUDE NEW ROUTES BELOW:
//

app.get('/phrases', function(req, res){
  var phrasesString = phrases.join(', ');
  res.send(phrasesString);
});

// make the application accessible at localhost:devPort:
var devPort = 3210;
app.listen(devPort, function(){
  console.log('This app is accessible at http://localhost:' + devPort);
});
