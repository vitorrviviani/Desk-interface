var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Walbrook floor plan' });
});

router.get('/desks', function(req, res, next) {
  data = { "desks": [
    {"desk":1, "available": "yes", "floor": 5},
    {"desk":2, "available": "no", "floor": 5},
    {"desk":3, "available": "yes", "floor": 5},
    {"desk":4, "available": "yes", "floor": 5},
    {"desk":5, "available": "no", "floor": 5},
    {"desk":6, "available": "no", "floor": 5},
    {"desk":7, "available": "yes", "floor": 5},
    {"desk":8, "available": "yes", "floor": 5},
    {"desk":9, "available": "yes", "floor": 5},
    {"desk":10, "available": "no", "floor": 5},
    {"desk":11, "available": "yes", "floor": 5},
    {"desk":12, "available": "yes", "floor": 5},
    {"desk":13, "available": "no", "floor": 5},
    {"desk":14, "available": "no", "floor": 5},
    {"desk":15, "available": "yes", "floor": 5},
    {"desk":16, "available": "yes", "floor": 5},
    {"desk":17, "available": "yes", "floor": 6},
    {"desk":18, "available": "yes", "floor": 6},
    {"desk":19, "available": "no", "floor": 6},
    {"desk":20, "available": "yes", "floor": 6},
    {"desk":21, "available": "yes", "floor": 6},
    {"desk":22, "available": "no", "floor": 6},
    {"desk":23, "available": "no", "floor": 6},
    {"desk":24, "available": "no", "floor": 6},
    {"desk":25, "available": "yes", "floor": 6},
    {"desk":26, "available": "yes", "floor": 6},
    {"desk":27, "available": "no", "floor": 6},
    {"desk":28, "available": "no", "floor": 6},
    {"desk":29, "available": "yes", "floor": 2},
    {"desk":30, "available": "yes", "floor": 2},
    {"desk":31, "available": "no", "floor": 2},
    {"desk":32, "available": "no", "floor": 2},
    {"desk":33, "available": "no", "floor": 2},
    {"desk":34, "available": "yes", "floor": 2},
    {"desk":35, "available": "no", "floor": 2},
    {"desk":36, "available": "no", "floor": 2},
    {"desk":37, "available": "yes", "floor": 2},
    {"desk":38, "available": "yes", "floor": 2},
    {"desk":39, "available": "no", "floor": 2},
    {"desk":40, "available": "yes", "floor": 2},
  ]};

  var data1 = '{"desks" :['
  console.log(req.param('floorNum'));
  for (i in data.desks){
    if (data.desks[i].floor == req.param('floorNum')){
      data1 += JSON.stringify(data.desks[i]) + ',';
    }
  };  
  data1 = data1.slice(0, -1);
  data1 += ']}'     
  console.log(data1);
  res.send(data1);
});

module.exports = router;