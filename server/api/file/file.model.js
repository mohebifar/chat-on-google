'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FileSchema = new Schema({
  name: String,
  info: String,
  file: String,
  active: Boolean
});

module.exports = mongoose.model('File', FileSchema);
