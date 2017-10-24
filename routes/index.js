var express = require('express');
var router = express.Router();
var fs=require('fs');

/* GET home page. */
var n=0;
router.get('/', function(req, res, next) {
	
	fs.readFile('public/sjx.txt','utf-8',function(err,data){
		n++
		fs.writeFile('public/sjx.txt','孙佳鑫的页面被访问次数'+n)
	})
  res.render('index', { title: n });
});

module.exports = router;
