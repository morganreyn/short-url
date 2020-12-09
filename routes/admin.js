var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let baseUrl = 'http://localhost:3000';
  let urls = [
    {
      id : 123,
      redirect : 'https://example.com/long-name-goes-here',
      url : 'http://localhost:3000/123'
    },
    {
      id : 456,
      redirect : 'https://example.com/long-name-goes-here',
      url : 'http://localhost:3000/456'
    },
    {
      id : 789,
      redirect : 'https://example.com/long-name-goes-here',
      url : 'http://localhost:3000/789'
    }
  ];
  res.render('admin/dashboard', {
    title : 'Admin Dashboard',
    urls : urls,
    baseUrl : baseUrl
  });
});

router.get('/url/:id', function (req, res, next) {
  let data = {
    id : req.params.id,
    redirect : 'https://example.com/long-name-goes-here',
    url : 'http://localhost:3000/' + req.params.id
  }
  res.render('admin/url', {
    title : 'URL Information',
    data : data
  });
});

module.exports = router;
