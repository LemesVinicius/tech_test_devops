var express = require("express");
var router = express.Router();
var countriesController = require("../controllers/countriesController");

/* GET users listing. */
router.post("/", function (req, res) {
  return countriesController.addCountry(req, res);
});

router.get("/:id", function (req, res) {
  return countriesController.getCountry(req, res);
});

router.get("/", function (req, res) {
  return countriesController.getCountries(req, res);
});

router.delete("/:id", function (req, res) {
  return countriesController.deleteCountry(req, res);
});

router.put("/:id", function (req, res) {
  return countriesController.updateCountry(req, res);
});

module.exports = router;