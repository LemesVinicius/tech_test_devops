var express = require("express");
var router = express.Router();
var pilotsController = require("../controllers/pilotsController");

/* GET users listing. */
router.post("/", function (req, res) {
  return pilotsController.addPilot(req, res);
});

router.get("/:id", function (req, res) {
  return pilotsController.getPilot(req, res);
});

router.get("/", function (req, res) {
  return pilotsController.getPilots(req, res);
});

router.delete("/:id", function (req, res) {
  return pilotsController.deletePilot(req, res);
});

router.put("/:id", function (req, res) {
  return pilotsController.updatePilot(req, res);
});

module.exports = router;