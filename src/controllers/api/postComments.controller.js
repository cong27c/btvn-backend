const { success } = require("../../utils/response");
const postCommentsServices = require("../../services/postComments.service");

exports.getList = async (req, res) => {
  const postId = Number(req.params.post);

  const comments = await postCommentsServices.getAll(postId);

  success(res, 200, comments);
};

exports.getOne = async (req, res) => {
  const postId = Number(req.params.post);
  const commentId = Number(req.params.comment);

  const comment = await postCommentsServices.getById(postId, commentId);
  success(res, 201, comment);
};

exports.create = async (req, res) => {
  const postId = Number(req.params.post);

  const newComment = await postCommentsServices.create(postId, req.body);

  success(res, 201, newComment);
};
