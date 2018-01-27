var express = require('express');
var router = express.Router();

var days = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('alarm', { title: "Set Alarm", days: days});
});

router.post('/', function(req, res, next) {
  // handle POST here
  console.log(req.body);
  res.render('alarm', { title: "Set Alarm", days: days});
});

module.exports = router;
