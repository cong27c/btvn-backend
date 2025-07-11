// services/auth.service.js
const usersModel = require("../models/users.model");
const bcrypt = require("bcrypt");

class AuthService {
  async register({ email, password }) {
    const existingUser = await usersModel.findByEmail(email);
    if (existingUser) {
      throw new Error("Email đã tồn tại");
    }

    const hashed = await bcrypt.hash(password, 10);
    return await usersModel.create({
      email,
      password: hashed,
    });
  }

  async login({ email, password }) {
    const user = await usersModel.findByEmail(email);

    if (!user) throw new Error("Sai email hoặc mật khẩu");

    const match = await bcrypt.compare(password, user.password);

    if (!match) throw new Error("Sai email hoặc mật khẩu");

    return user;
  }
}

module.exports = new AuthService();
