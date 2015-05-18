// phraseConsoler.js

var REPL = require('repl'),
    db = require('./models');

var repl = REPL.start(' Phrase > ');
repl.context.db = db;

repl.on('exit', function(){
  console.log('Closing phraseConsoler... Adios!');
  console.exit();
});
