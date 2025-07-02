const { validationResult } = require("express-validator");
const response = require("../../utils/response");

function handleValidationErrors(req, res, next) {
  const result = validationResult(req);

  if (result.isEmpty() || req.method === "GET") return next();

  const errors = result.array().reduce((errors, error) => {
    errors[error.path] = error.msg;
    return errors;
  }, {});
  console.log(errors);
  res.render(res.view, {
    user: req.user || {},
    old: req.body,
    errors,
  });
}
module.exports = handleValidationErrors;
