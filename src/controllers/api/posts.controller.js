const { success } = require("../../utils/response");
const postsServices = require("../../services/posts.service");

exports.getList = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const posts = await postsServices.getPaginatedPosts(page, limit);
  success(res, 200, posts);
};

exports.getAll = async (req, res) => {
  const posts = await postsServices.getAll();
  success(res, 201, posts);
};

exports.getOne = async (req, res) => {
  success(res, 200, req.post);
};

exports.create = async (req, res) => {
  const post = await postsServices.create(req.body);
  success(res, 201, post);
};

exports.update = async (req, res) => {
  const post = await postsServices.update(req.post.id, req.body);
  success(res, 200, post);
};

exports.remove = async (req, res) => {
  await postsServices.remove(req.post.id);
  success(res, 204);
};
