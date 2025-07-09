const express = require("express");
const router = express.Router();

const postsRouter = require("./posts.route");
const forgotPasswordRouter = require("./forgot-password.route");
const accountSettingRouter = require("./accountSetting.route");
const analyticsRouter = require("./analytics.route");
const categoriesRouter = require("./categories.route");
const commentsRouter = require("./comments.route");
const productsRouter = require("./products.route");
const settingsRouter = require("./settings.route");
const topicsRouter = require("./topics.route");
const usersRouter = require("./users.route");
const dashboardRouter = require("./dashboard.route");
const resetPasswordRouter = require("./reset-password.route");
const authRouter = require("./auth.route");

router.use("/posts", postsRouter);
router.use("/forgot-password", forgotPasswordRouter);
router.use("/reset-password", resetPasswordRouter);
router.use("/account-settings", accountSettingRouter);
router.use("/analytics", analyticsRouter);
router.use("/categories", categoriesRouter);
router.use("/comments", commentsRouter);
router.use("/products", productsRouter);
router.use("/settings", settingsRouter);
router.use("/topics", topicsRouter);
router.use("/users", usersRouter);
router.use("/dashboard", dashboardRouter);
router.use("/", authRouter);

module.exports = router;
