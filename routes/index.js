var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: "Azure",
    message: process.env.MESSAGE || "This is production"
  });
});

module.exports = router;