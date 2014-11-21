/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /games               ->  index
 * POST    /games               ->  create
 * GET     /games/:id           ->  show
 * PUT     /games/:id           ->  update
 * DELETE  /games/:id           ->  destroy
 */

'use strict';

var _ = require('lodash');
var Game = require('./game.model');

// Get list of games
exports.index = function(req, res) {
  Game.find(function (err, games) {
    if(err) { return handleError(res, err); }
    return res.json(200, games);
  });
};

// Get a single game
exports.show = function(req, res) {
  Game.findOne({'game_id':req.params.id}, function (err, game) {
    if(err) { return handleError(res, err); }
    if(!game) { return res.send(404); }
    /*PSNAPI.getGameInfo(game.stores, game.cid, function(cb) {
      console.log('%j', cb);
    });
    PSNAPI.getGameCID('Final Fantasy X', 'ES/es', function(cb) {
      console.log('%j', cb);
    });*/
    return res.json(game);
  });
};

// Creates a new game in the DB.
exports.create = function(req, res) {
  Game.create(req.body, function(err, game) {
    if(err) { return handleError(res, err); }
    return res.json(201, game);
  });
};

// Updates an existing game in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Game.findById(req.params.id, function (err, game) {
    if (err) { return handleError(res, err); }
    if(!game) { return res.send(404); }
    var updated = _.merge(game, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, game);
    });
  });
};

// Deletes a game from the DB.
exports.destroy = function(req, res) {
  Game.findById(req.params.id, function (err, game) {
    if(err) { return handleError(res, err); }
    if(!game) { return res.send(404); }
    game.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}