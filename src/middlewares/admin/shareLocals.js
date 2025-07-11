const usersService = require("../../services/users.service");

async function shareLocals(req, res, next) {
  const userId = req.session.userId;
  res.locals.auth = null;

  if (userId) {
    res.locals.auth = await usersService.getById(userId);
  }

  next();
}

module.exports = shareLocals;
