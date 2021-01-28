var express = require("express");
var router = express.Router();
var flightsController = require("../controllers/flightsController");

/* GET users listing. */
router.post("/", function (req, res) {
  return flightsController.addFlights(req, res);
});

router.get("/:id", function (req, res) {
  return flightsController.getFlight(req, res);
});

router.get("/", function (req, res) {
  return flightsController.getFlights(req, res);
});

router.delete("/:id", function (req, res) {
  return flightsController.deleteFlights(req, res);
});

module.exports = router;
