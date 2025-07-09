const express = require("express");
const authController = require("../../controllers/admin/auth.controller");
const router = express.Router();

router.get("/register", authController.showRegisterForm);
router.get("/login", authController.showLoginForm);
router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
