var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Ja kuso kulkee APIn läpi!!!');
});

module.exports = router;
