var express = require('express');
var router = express.Router();

/* GET searchResults page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'search Results' });
});

module.exports = router;
