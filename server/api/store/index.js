'use strict';

var express = require('express');
var controller = require('./store.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/geo', controller.geo);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.post('/search', controller.search);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;