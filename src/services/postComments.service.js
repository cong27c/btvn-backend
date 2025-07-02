const postCommentModal = require("../models/postComments.modal");
class PostCommentsServices {
  async getAll(postId) {
    const comments = await postCommentModal.findAll(postId);

    return comments;
  }

  async getById(postId, commentId) {
    const comment = await postCommentModal.findById(postId, commentId);
    return comment;
  }

  async create(postId, data) {
    const post = await postCommentModal.create(postId, data);
    return post;
  }
}
module.exports = new PostCommentsServices();
