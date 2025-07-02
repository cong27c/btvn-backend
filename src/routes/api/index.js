const express = require("express");
const router = express.Router();
const postsRouter = require("./posts.route");
const commentsRouter = require("./comments.route");
const productsRouter = require("./products.route");
const usersRouter = require("./users.route");
const postCommentsRouter = require("./postComments.route");

router.use("/comments", commentsRouter);
router.use("/posts", postsRouter);
router.use("/products", productsRouter);
router.use("/users", usersRouter);
router.use("/", postCommentsRouter);

module.exports = router;
