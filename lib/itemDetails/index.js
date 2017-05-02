var express = require('express');
var router = express.Router();

/* GET idemDetails page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'item Details' });
});

module.exports = router;
