const authService = require("../../services/auth.service");

exports.showRegisterForm = async (req, res) => {
  res.render("admin/auth/register", { layout: "admin/layouts/auth" });
};

exports.showLoginForm = async (req, res) => {
  res.render("admin/auth/login", {
    layout: "admin/layouts/auth",
    old: {},
    error: null,
  });
};

exports.register = async (req, res) => {
  await authService.register({
    email: req.body.email,
    password: req.body.password,
  });
  res.redirect("/admin/login");
};

exports.login = async (req, res) => {
  try {
    const user = await authService.login({
      email: req.body.email,
      password: req.body.password,
    });

    if (user) {
      req.session.userId = user.id;
    }
    req.setFlash({
      type: "success",
      message: "Đăng nhập thành công",
    });
    res.redirect("/admin/dashboard");
  } catch (error) {
    req.setFlash({
      type: "error",
      message: "Đăng nhập thất bại",
    });

    res.render("admin/auth/login", {
      layout: "admin/layouts/auth",
      error: error.message,
      old: { email: req.body.email },
    });
  }
};
exports.logout = async (req, res) => {
  delete req.session.userId;
  res.redirect("/admin/login");
};
