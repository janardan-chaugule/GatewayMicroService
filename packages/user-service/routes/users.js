var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/all', function(req, res, next) {
  res.send('users are working fine');
});

module.exports = router;
