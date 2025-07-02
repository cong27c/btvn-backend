exports.index = async (req, res) => {
  res.render("admin/auth/register", {
    layout: "./admin/layouts/auth/index.ejs",
  });
};
