const express = require("express");
const resetPasswordController = require("../../controllers/admin/showResetForm.controller");
const router = express.Router();

router.get("/", resetPasswordController.index);

module.exports = router;
