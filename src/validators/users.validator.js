const { checkSchema } = require("express-validator");
const handleValidationErrors = require("./handleValidationErrors");

exports.createUser = [
  checkSchema({
    name: {
      notEmpty: { errorMessage: "Tên không được để trống" },
    },
    email: {
      notEmpty: { errorMessage: "Email không được để trống" },
      isEmail: { errorMessage: "Email không hợp lệ" },
    },
    password: {
      notEmpty: { errorMessage: "Mật khẩu không được để trống" },
      isLength: {
        options: { min: 6 },
        errorMessage: "Mật khẩu phải có ít nhất 6 ký tự",
      },
    },
    username: {
      notEmpty: { errorMessage: "Tên người dùng không được để trống" },
      matches: {
        options: [/^[a-zA-Z0-9_]+$/],
        errorMessage:
          "Tên người dùng chỉ có thể chứa ký tự chữ, số và dấu gạch dưới",
      },
    },
    birthday: {
      optional: true,
      isDate: { errorMessage: "Ngày sinh không hợp lệ" },
      toDate: true,
    },
    avatar: {
      optional: true,
      isURL: { errorMessage: "Ảnh đại diện không hợp lệ" },
    },
    phone: {
      optional: true,
      isMobilePhone: { errorMessage: "Số điện thoại không hợp lệ" },
      isLength: {
        options: { min: 10, max: 15 },
        errorMessage: "Số điện thoại phải có độ dài từ 10 đến 15 ký tự",
      },
    },
    gender: {
      optional: true,
      isIn: {
        options: [["male", "female", "other"]],
        errorMessage: "Giới tính không hợp lệ",
      },
    },
    rel_status: {
      optional: true,
      isIn: {
        options: [["single", "married", "divorced", "other"]],
        errorMessage: "Tình trạng quan hệ không hợp lệ",
      },
    },
    bio: {
      optional: true,
      isString: { errorMessage: "Bio phải là chuỗi ký tự" },
    },
    address: {
      optional: true,
      isString: { errorMessage: "Địa chỉ phải là chuỗi ký tự" },
    },
    blocked_at: {
      optional: true,
      isDate: { errorMessage: "Ngày bị khóa không hợp lệ" },
      toDate: true,
    },
    created_at: {
      optional: true,
      isISO8601: { errorMessage: "Ngày tạo không hợp lệ" },
      toDate: true,
    },
    updated_at: {
      optional: true,
      isISO8601: { errorMessage: "Ngày cập nhật không hợp lệ" },
      toDate: true,
    },
  }),
  handleValidationErrors,
];

exports.updateUser = [
  checkSchema({
    name: {
      optional: true,
      notEmpty: { errorMessage: "Tên không được để trống nếu có" },
    },
    email: {
      optional: true,
      isEmail: { errorMessage: "Email không hợp lệ" },
    },
    password: {
      optional: true,
      isLength: {
        options: { min: 6 },
        errorMessage: "Mật khẩu phải có ít nhất 6 ký tự",
      },
    },
    username: {
      optional: true,
      matches: {
        options: [/^[a-zA-Z0-9_]+$/],
        errorMessage:
          "Tên người dùng chỉ có thể chứa ký tự chữ, số và dấu gạch dưới",
      },
    },
    birthday: {
      optional: true,
      isDate: { errorMessage: "Ngày sinh không hợp lệ" },
      toDate: true,
    },
    avatar: {
      optional: true,
      isURL: { errorMessage: "Ảnh đại diện không hợp lệ" },
    },
    phone: {
      optional: true,
      isMobilePhone: { errorMessage: "Số điện thoại không hợp lệ" },
    },
    gender: {
      optional: true,
      isIn: {
        options: [["male", "female", "other"]],
        errorMessage: "Giới tính không hợp lệ",
      },
    },
    rel_status: {
      optional: true,
      isIn: {
        options: [["single", "married", "divorced", "other"]],
        errorMessage: "Tình trạng quan hệ không hợp lệ",
      },
    },
    bio: {
      optional: true,
      isString: { errorMessage: "Bio phải là chuỗi ký tự" },
    },
    address: {
      optional: true,
      isString: { errorMessage: "Địa chỉ phải là chuỗi ký tự" },
    },
    blocked_at: {
      optional: true,
      isDate: { errorMessage: "Ngày bị khóa không hợp lệ" },
      toDate: true,
    },
    created_at: {
      optional: true,
      isISO8601: { errorMessage: "Ngày tạo không hợp lệ" },
      toDate: true,
    },
    updated_at: {
      optional: true,
      isISO8601: { errorMessage: "Ngày cập nhật không hợp lệ" },
      toDate: true,
    },
  }),
  handleValidationErrors,
];
