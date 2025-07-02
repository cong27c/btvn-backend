const { checkSchema } = require("express-validator");
const handleValidationErrors = require("./handleValidationErrors");

exports.createPost = [
  checkSchema({
    title: {
      notEmpty: { errorMessage: "Tiêu đề không được để trống" },
    },
    content: {
      notEmpty: { errorMessage: "Nội dung không được để trống" },
    },
    description: {
      notEmpty: { errorMessage: "Mô tả không được để trống" },
    },
    slug: {
      notEmpty: { errorMessage: "Slug không được để trống" },
      matches: {
        options: [/^[a-z0-9]+(?:-[a-z0-9]+)*$/],
        errorMessage: "Slug không hợp lệ (chỉ chứa a-z, 0-9, dấu gạch nối)",
      },
    },
    price: {
      notEmpty: { errorMessage: "Giá không được để trống" },
      isFloat: {
        options: { min: 0 },
        errorMessage: "Giá phải là số hợp lệ lớn hơn hoặc bằng 0",
      },
      toFloat: true,
    },
    user_id: {
      notEmpty: { errorMessage: "User ID không được để trống" },
      isInt: { errorMessage: "User ID phải là số nguyên" },
      toInt: true,
    },
  }),
  handleValidationErrors,
];

exports.updatePost = [
  checkSchema({
    title: {
      optional: true,
      notEmpty: { errorMessage: "Tiêu đề không được để trống nếu có" },
    },
    content: {
      optional: true,
      notEmpty: { errorMessage: "Nội dung không được để trống nếu có" },
    },
    description: {
      optional: true,
      notEmpty: { errorMessage: "Mô tả không được để trống nếu có" },
    },
    slug: {
      optional: true,
      notEmpty: { errorMessage: "Slug không được để trống nếu có" },
      isSlug: { errorMessage: "Slug không hợp lệ" },
    },
    price: {
      optional: true,
      notEmpty: { errorMessage: "Giá không được để trống nếu có" },
      isFloat: {
        options: { min: 0 },
        errorMessage: "Giá phải là số hợp lệ lớn hơn hoặc bằng 0",
      },
    },
  }),
  handleValidationErrors,
];
