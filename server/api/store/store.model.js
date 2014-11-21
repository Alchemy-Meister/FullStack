'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StoreSchema = new Schema({
  store_id: { type: Number },
  region: { type: String},
  language: { tyoe: String}
});

module.exports = mongoose.model('Store', StoreSchema);