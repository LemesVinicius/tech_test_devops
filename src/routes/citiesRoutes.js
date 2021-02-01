var express = require("express");
var router = express.Router();
var citiesController = require("../controllers/citiesController");

/* GET users listing. */
router.post("/", function (req, res) {
  return citiesController.addCity(req, res);
});

router.get("/:id", function (req, res) {
  return citiesController.getCity(req, res);
});

router.get("/", function (req, res) {
  return citiesController.getCities(req, res);
});

router.delete("/:id", function (req, res) {
  return citiesController.deleteCity(req, res);
});

router.put("/:id", function (req, res) {
  return citiesController.updateCity(req, res);
});

module.exports = router;