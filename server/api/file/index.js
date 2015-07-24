'use strict';

var express = require('express');
var controller = require('./file.controller');
var multiparty = require('connect-multiparty');
var config = require('../../config/environment');
var multipartyMiddleware = multiparty({
  uploadDir: config.static
});

console.log(config.static);

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', multipartyMiddleware, controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
