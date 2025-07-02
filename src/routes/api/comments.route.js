const express = require("express");
const router = express.Router();
const commentsControllers = require("../../controllers/api/comments.controller");
const commentsValidator = require("../../validators/comments.validator");
const attachResourceLoaders = require("../../utils/attachResourceLoaders");

attachResourceLoaders(router, ["comment"]);

router.get("/", commentsControllers.getList);

router.get("/:comment", commentsControllers.getOne);

router.post("/", commentsValidator.createComment, commentsControllers.create);

router.put(
  "/:comment",
  commentsValidator.updateComment,
  commentsControllers.update
);
router.patch(
  "/:comment",
  commentsValidator.updateComment,
  commentsControllers.update
);

router.delete("/:comment", commentsControllers.remove);

module.exports = router;
