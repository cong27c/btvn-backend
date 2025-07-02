const { success } = require("../../utils/response");
const productsService = require("../../services/products.service");

exports.getList = async (req, res) => {
  const products = await productsService.getAll();
  success(res, 200, products);
};

exports.getOne = async (req, res) => {
  success(res, 200, req.product);
};

exports.create = async (req, res) => {
  const product = await productsService.create(req.body);
  success(res, 201, product);
};

exports.update = async (req, res) => {
  const product = await productsService.update(req.product.id, req.body);
  success(res, 200, product);
};

exports.remove = async (req, res) => {
  await productsService.remove(req.product.id);
  success(res, 204);
};
