exports.index = async (req, res) => {
  res.render("admin/auth/forgot-password.ejs", {
    layout: "./admin/layouts/auth/index.ejs",
  });
};
