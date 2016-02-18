var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  var file = __dirname + '/../public/list/list.json';

  fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
      console.log('Error: ' + err);
      return;
    }

    lista = JSON.parse(data);
    console.log(lista);
    res.render('index', { title: lista.Year.top2011.top40.id.top01.album_cover });
});
});

module.exports = router;
