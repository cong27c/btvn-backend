const postsModel = require("../models/posts.model");
class PostsServices {
  async getPaginatedPosts(page, limit) {
    const offset = (page - 1) * limit;
    const posts = await postsModel.getPaginatedPosts(limit, offset);
    return posts;
  }

  async getAll() {
    const posts = await postsModel.findAll();
    return posts;
  }

  async getById(id) {
    const post = await postsModel.findById(id);
    return post;
  }

  async create(data) {
    const post = await postsModel.create(data);
    return post;
  }

  async update(id, data) {
    const post = await postsModel.update(id, data);
    return post;
  }

  async remove(id) {
    const post = await postsModel.remove(id);
    return post;
  }
}
module.exports = new PostsServices();
