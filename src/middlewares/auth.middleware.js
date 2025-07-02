const isLogin = true;

export const authMiddleware = (req, res, next) => {
  if (!isLogin) {
    return res.redirect("/admin/register");
  }
  req.message = "Học lập trình khó vãi đạn";
  res.set("x-api-key", "1231");
  next();
};
