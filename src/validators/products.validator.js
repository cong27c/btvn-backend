const { checkSchema } = require("express-validator");
const handleValidationErrors = require("./handleValidationErrors");

exports.createProduct = [
  checkSchema({
    price: {
      errorMessage: "Giá không được để trống",
      notEmpty: true,
      isFloat: {
        options: { min: 0 },
        errorMessage: "Giá phải là số hợp lệ lớn hơn hoặc bằng 0",
      },
      toFloat: true,
    },
    description: {
      errorMessage: "Mô tả không được để trống",
      notEmpty: true,
    },
  }),
  handleValidationErrors,
];

exports.updateProduct = [
  checkSchema({
    price: {
      optional: true,
      isFloat: {
        options: { min: 0 },
        errorMessage: "Giá phải là số hợp lệ lớn hơn hoặc bằng 0",
      },
      toFloat: true,
    },
    description: {
      optional: true,
      notEmpty: { errorMessage: "Mô tả không được để trống" },
    },
  }),
  handleValidationErrors,
];
