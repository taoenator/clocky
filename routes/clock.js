var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('clock', { title: "Ethan's Awesome Clock"});
});

module.exports = router;
