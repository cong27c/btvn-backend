const express = require("express");
const forgotController = require("../../controllers/admin/sendForgotEmail.controller");
const router = express.Router();

router.get("/", forgotController.index);

module.exports = router;
