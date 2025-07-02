const express = require("express");
const router = express.Router();
const postCommentsController = require("../../controllers/api/postComments.controller");
const commentsController = require("../../controllers/api/comments.controller");
const attachResourceLoaders = require("../../utils/attachResourceLoaders");
const commentsValidator = require("../../validators/comments.validator");

attachResourceLoaders(router, ["post", "comment"]);

router.get("/posts/:post/comments", postCommentsController.getList);
router.get("/comments/:comment", commentsController.getOne);

router.post(
  "/posts/:post/comments",
  commentsValidator.createComment,
  postCommentsController.create
);

router.put(
  "/comments/:comment",
  commentsValidator.updateComment,
  commentsController.update
);

router.patch(
  "comments/:comment",
  commentsValidator.updateComment,
  commentsController.update
);

router.delete("comments/:comment", commentsController.remove);

module.exports = router;
