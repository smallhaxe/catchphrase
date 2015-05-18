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
                {
                  _id: 0,
                  title: 'command line',
                  description: 'a thing one uses',
                },
                {
                  _id: 1,
                  title: 'closure',
                  description: 'a type of function',
                },
                {
                  _id: 2,
                  title: 'callback',
                  description: 'another type of function',
                },
              ];


// make static assets accessible to the app:
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
//  var phrasesString = phrases.join(', ');
//  res.send(phrasesString);
  db.Phrase.find({},
  function(err, phrases){
    // request successful; return phrases:
    res.status(200).send(phrases);
  });
});

app.post('/phrases', function(req, res){
  db.Phrase.create(req.body.phrase,
    function(err, phrase){
      // request fulfilled; phrase created:
      res.send(201, phrase);
    });
});

app.delete('/phrases/:id', function(req, res){
  db.Phrase.findOneAndRemove({
    _id: req.params.id
  }, function(err, phrase){
    // request processed; no phrase to return:
    res.send(204);
  });
});

// make the application accessible at localhost:devPort:
var devPort = 3210;
app.listen(devPort, function(){
  console.log('This app is accessible at http://localhost:' + devPort);
});
