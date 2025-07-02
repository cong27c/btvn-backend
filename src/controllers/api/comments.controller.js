const { success } = require("../../utils/response");
const commentsService = require("../../services/comments.service");

exports.getList = async (req, res) => {
  const comments = await commentsService.getAll();
  success(res, 200, comments);
};

exports.getOne = async (req, res) => {
  success(res, 200, req.comment);
};

exports.create = async (req, res) => {
  const comment = await commentsService.create(req.body);
  success(res, 201, comment);
};

exports.update = async (req, res) => {
  const comment = await commentsService.update(req.comment.id, req.body);
  console.log(req.comment.id);
  success(res, 200, comment);
};

exports.remove = async (req, res) => {
  await commentsService.remove(req.comment.id);
  success(res, 204);
};
