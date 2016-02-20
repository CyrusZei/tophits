var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  var file = __dirname + '/../public/list/list.json';

  fs.readFile(file, 'utf8', function(err, data) {
    if (err) {
      console.log('Error: ' + err);
      return;
    }

    lista = JSON.parse(data);
    console.log(lista);
    alldata = "";
    var top40_2011 = lista.Year.year2011.top40;
    for (var i = 0; i < top40_2011.length; i++) {

      alldata+= "<div class=\"text\">";

      alldata += "<h1>"+ top40_2011[i].pos +"</h1>";
      alldata += "<img src=\"" + top40_2011[i].album_cover +"\">";

      alldata += "<h2>" + top40_2011[i].artist_namn +"</h2>";
      alldata += "<h2>" + top40_2011[i].song +"</h2>";
      alldata += "<a href=\"" + top40_2011[i].spotify +"\" target=\"_blank\"><img src=\"/images/spotify.png\"  class=\"spotify\"></a>";
      alldata += "<a href=\"" + top40_2011[i].youtube +"\" target=\"_blank\"><img src=\"/images/youtube.png\" class=\"youtube\"></a>";
      alldata += "</div>";



      /* Access the values using the keys : */
      //console.log(top40_2011[i].pos);
      //console.log(top40_2011[i].artist_namn);
      //console.log(top40_2011[i].song);
    }
    console.log(alldata);
    res.render('index', {
      lista : alldata
    });

  });
});

router.get('/add',function(req, res, next){
  var file = __dirname + '/../public/list/list.json';

  res.render('add',{
    lista_add : 'lista lägga till'
  });
});

router.get('/list',function(req, res, next){

  res.render('list',{
    lista_en :'Visa en'
  });
});
module.exports = router;
