const express = require("express");
const router = express.Router();
const healthCheckController = require("../controllers/healthCheckController");

router.get("/", function (req, res) {
  return healthCheckController.getHealth(req, res);
});

module.exports = router;
