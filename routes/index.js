var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: data.all });
  console.log(data);
});

module.exports = router;
