// models.js

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/catchphrase_db');

var phraseSchema = new mongoose.Schema({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  learned: {
    type: Boolean,
    default: false,
  },
});

var Phrase = mongoose.model('Phrase', phraseSchema);

module.exports.Phrase = Phrase;
