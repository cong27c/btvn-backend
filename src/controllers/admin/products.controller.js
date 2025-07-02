exports.index = async (req, res) => {
  res.render("admin/products");
};

exports.show = async (req, res) => {
  res.render("admin/posts/show");
};
