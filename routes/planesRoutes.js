var express = require("express");
var router = express.Router();
var planesController = require("../controllers/planesController");

router.post("/", function (req, res) {
  return planesController.addPlane(req, res);
});

router.get("/:id", function (req, res) {
  return planesController.getPlane(req, res);
});

router.get("/", function (req, res) {
  return planesController.getPlanes(req, res);
});

router.delete("/:id", function (req, res) {
  return planesController.deletePlane(req, res);
});

router.put("/:id", function (req, res) {
  return planesController.updatePlane(req, res);
});

module.exports = router;