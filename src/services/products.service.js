const productsModel = require("../models/products.model");

class ProductsService {
  async getAll() {
    const products = await productsModel.findAll();
    return products;
  }

  async getById(id) {
    const user = await productsModel.findById(id);
    return user;
  }

  async create(data) {
    const user = await productsModel.create(data);
    return user;
  }

  async update(id, data) {
    const user = await productsModel.update(id, data);
    return user;
  }

  async remove(id) {
    const user = await productsModel.remove(id);
    return user;
  }
}

module.exports = new ProductsService();
