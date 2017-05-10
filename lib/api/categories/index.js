var express = require('express');
var router = express.Router();

var categoryDetails = require('./categoryDetails');

/* GET items results. */
router.get('/:categoryId', categoryDetails.get);

module.exports = router;
