var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {
  let data = {
    redirect : req.body.create,
    url : "http://localhost:3000/123"
  }
  res.render('index', { title: 'Express', data : data} );
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  let data = {}

  if (id === "123") {
    data = {
      id : 123,
      redirect : "https://example.com/long-name-goes-here",
      url : "http://localhost:3000/123"
    }
    res.render('redirect', {data} );
  }
  else {
    next();
  }
});

module.exports = router;

