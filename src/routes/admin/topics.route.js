const express = require("express");
const topicsController = require("../../controllers/admin/topics.controller");
const router = express.Router();

router.get("/", topicsController.index);

module.exports = router;
