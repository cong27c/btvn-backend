const express = require("express");
const settingsController = require("../../controllers/admin/settings.controller");
const router = express.Router();

router.get("/", settingsController.index);

module.exports = router;
