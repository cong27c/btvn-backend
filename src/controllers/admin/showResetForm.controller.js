exports.index = async (req, res) => {
  res.render("admin/auth/reset-password.ejs", {
    layout: "./admin/layouts/auth/index.ejs",
  });
};
