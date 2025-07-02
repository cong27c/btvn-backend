const express = require("express");
const usersController = require("../../controllers/admin/users.controller");
const userValidator = require("../../validators/admin/users.validator");
const router = express.Router();

router.get("/", usersController.index);
router.get("/create", usersController.create);
router.post("/", userValidator.createUser, usersController.store);
router.get("/:id", usersController.show);
router.get("/:id/edit", usersController.edit);
router.patch(
  "/:id",
  usersController.loadUser,
  userValidator.editUser,
  usersController.update
);
router.delete("/:id", usersController.softDelete);

module.exports = router;
