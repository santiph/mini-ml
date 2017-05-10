var express = require('express');
var router = express.Router();
var models = require('./models');
var helpers = require('./helpers');

var itemDetails = require('./itemDetails');
var itemSearch = require('./itemSearch');

/* GET items results. */
router.get('/', itemSearch.get);

/* GET items details. */
router.get('/:itemId', itemDetails.get);

module.exports = router;
