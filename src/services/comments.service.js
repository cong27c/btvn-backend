const commentsModel = require("../models/comments.model");

class CommentsService {
  async getAll() {
    const comments = await commentsModel.findAll();
    return comments;
  }

  async getById(id) {
    const comment = await commentsModel.findById(id);
    return comment;
  }

  async create(data) {
    const comment = await commentsModel.create(data);
    return comment;
  }

  async update(id, data) {
    const comment = await commentsModel.update(id, data);
    return comment;
  }

  async remove(id) {
    const comment = await commentsModel.remove(id);
    return comment;
  }
}

module.exports = new CommentsService();
