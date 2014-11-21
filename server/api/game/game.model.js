'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
var	ObjectId = Schema.Types.ObjectId;

var GameSchema = new Schema({
	
	game_id: { type: String, index: true },
	stores: [{ type: Number, ref: 'Store'}],
	cid: { type: String }
	});

var Game = module.exports = mongoose.model('Game', GameSchema);