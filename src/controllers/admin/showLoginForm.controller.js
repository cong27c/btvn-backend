exports.index = async (req, res) => {
  res.render("admin/auth/login", {
    layout: "./admin/layouts/auth/index.ejs",
  });
};
