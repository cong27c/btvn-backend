const usersService = require("../../services/users.service");

exports.index = async (req, res) => {
  const users = await usersService.getAll();
  res.render("admin/users", {
    users,
  });
};

exports.create = async (req, res) => {
  res.render("admin/users/create", {
    old: {},
    errors: {},
  });
};
exports.show = async (req, res) => {
  const user = await usersService.getById(req.params.id);
  console.log(user);
  res.render("admin/users/show", {
    user,
  });
};

exports.edit = async (req, res) => {
  const user = await usersService.getById(req.params.id);

  res.render("admin/users/edit", {
    old: {},
    errors: {},
    user,
  });
};

exports.loadUser = async (req, res, next) => {
  const user = await usersService.getById(req.params.id);
  if (!user) return res.status(404).send("Not Found");
  req.user = user;
  next();
};

exports.update = async (req, res) => {
  const { confirm_password, ...body } = req.body;
  await usersService.update(req.params.id, body);

  res.redirect(`/admin/users/${req.params.id}/edit`);
};

exports.store = async (req, res) => {
  const { confirm_password, ...body } = req.body;

  const users = await usersService.create(body);

  res.redirect("/admin/users");
};

exports.softDelete = async (req, res) => {
  try {
    const deleted = await usersService.remove(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Ko tìm thấy người dùng" });
    }

    return res.json({ message: "Xóa thành công" });
  } catch (error) {
    return res.status(500).json({ message: "Lỗi server" });
  }
};
