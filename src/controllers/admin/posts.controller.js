const postsService = require("../../services/posts.service");

exports.index = async (req, res) => {
  res.render("admin/posts/index");
};

exports.show = async (req, res) => {
  res.render("admin/posts/show");
};
