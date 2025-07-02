const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/api/users.controller");
const usersValidator = require("../../validators/users.validator");
const attachResourceLoaders = require("../../utils/attachResourceLoaders");

attachResourceLoaders(router, ["user"]);

router.get("/", usersController.getList);
router.get("/:user", usersController.getOne);
router.post("/", usersValidator.createUser, usersController.create);
router.put("/:user", usersValidator.updateUser, usersController.update);
router.patch("/:user", usersValidator.updateUser, usersController.update);
router.delete("/:user", usersController.remove);

module.exports = router;
