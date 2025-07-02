const express = require("express");
const router = express.Router();
const postsController = require("../../controllers/api/posts.controller");
const postValidator = require("../../validators/posts.validator");
const attachResourceLoaders = require("../../utils/attachResourceLoaders");

attachResourceLoaders(router, ["post"]);

router.get("/", postsController.getList);

router.get("/:post", postsController.getOne);

router.post("/", postValidator.createPost, postsController.create);

router.put("/:post", postValidator.updatePost, postsController.update);
router.patch("/:post", postValidator.updatePost, postsController.update);

router.delete("/:post", postsController.remove);

module.exports = router;
