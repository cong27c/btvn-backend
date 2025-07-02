const express = require("express");
const loginController = require("../../controllers/admin/showLoginForm.controller");
const { authMiddleware } = require("../../middlewares/auth.middleware");
const router = express.Router();

router.get("/", authMiddleware, loginController.index);

module.exports = router;
