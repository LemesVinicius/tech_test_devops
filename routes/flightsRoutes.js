var express = require('express');
var router = express.Router();
var flightsController = require('../controllers/flightsController');

/* GET users listing. */
router.post('/', function(req, res, next) {
  return flightsController.addFlights(req,res);
});

module.exports = router;
