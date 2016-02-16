var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  var file = __dirname + '/../public/list/list.json';
  var data;
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
      console.log('Error: ' + err);
      return;
    }

    data = JSON.parse(data);
    console.log(data);
    res.render('index', { title: data });


  });




});

module.exports = router;
