/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /stores              ->  index
 * POST    /stores              ->  create
 * GET     /stores/:id          ->  show
 * PUT     /stores/:id          ->  update
 * DELETE  /stores/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Store = require('./store.model');
var Chihiro = require('./store.chihiro.api.js');

// Get list of stores
exports.index = function(req, res) {
  Store.find(function (err, stores) {
    if(err) { return handleError(res, err); }
    return res.json(200, stores);
  });
};

// Get a single store
exports.show = function(req, res) {
  Store.findOne({store_id: req.params.id}, function (err, store) {
    if(err) { return handleError(res, err); }
    if(!store) { return res.send(404); }
    return res.json(store);
  });
};

// Creates a new store in the DB.
exports.create = function(req, res) {
  Store.create(req.body, function(err, store) {
    if(err) { return handleError(res, err); }
    return res.json(201, store);
  });
};

// Updates an existing store in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Store.findById(req.params.id, function (err, store) {
    if (err) { return handleError(res, err); }
    if(!store) { return res.send(404); }
    var updated = _.merge(store, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, store);
    });
  });
};

// Deletes a store from the DB.
exports.destroy = function(req, res) {
  Store.findById(req.params.id, function (err, store) {
    if(err) { return handleError(res, err); }
    if(!store) { return res.send(404); }
    store.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

exports.geo = function(req, res) {
  Chihiro.getGeo(function (data) {
    return res.json(data);
  });
};

exports.search = function(req, res) {
  Chihiro.search(req.body.region, req.body.language, req.body.version, 
    req.body.term, req.body.options, function (data) {
      return res.json(data);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}   