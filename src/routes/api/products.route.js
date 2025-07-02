const express = require("express");
const router = express.Router();
const productsController = require("../../controllers/api/products.controller");
const productValidator = require("../../validators/products.validator");
const attachResourceLoaders = require("../../utils/attachResourceLoaders");

attachResourceLoaders(router, ["product"]);

router.get("/", productsController.getList);

router.get("/:product", productsController.getOne);

router.post("/", productValidator.createProduct, productsController.create);

router.put(
  "/:product",
  productValidator.updateProduct,
  productsController.update
);
router.put(
  "/:product",
  productValidator.updateProduct,
  productsController.update
);

router.delete("/:product", productsController.remove);

module.exports = router;
