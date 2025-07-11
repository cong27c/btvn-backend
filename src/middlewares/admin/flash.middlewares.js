function flashMiddleware(req, res, next) {
  const flashMessages = req.session.flash ?? [];
  delete req.session.flash;

  res.locals.flash = flashMessages;

  res.locals.getFlashMessages = function (type) {
    if (!type) return flashMessages;
    return flashMessages.filter((msg) => msg.type === type);
  };

  next();
}

module.exports = flashMiddleware;
