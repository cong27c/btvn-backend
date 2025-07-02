const { checkSchema } = require("express-validator");
const handleValidationErrors = require("./handleValidationErrors");

exports.createUser = [
  (req, res, next) => {
    res.view = "admin/users/create";
    next();
  },

  checkSchema({
    name: {
      notEmpty: true,
      errorMessage: "Nhập tên đầy đủ của bạn",
    },

    email: {
      notEmpty: {
        errorMessage: "Nhập email của bạn",
      },
      isEmail: {
        errorMessage: "Nhập email hợp lệ",
      },
    },

    phone: {
      notEmpty: {
        errorMessage: "Nhập số điện thoại của bạn",
      },
      isMobilePhone: {
        options: ["vi-VN"],
        errorMessage: "Số điện thoại không hợp lệ",
      },
    },

    address: {
      notEmpty: {
        errorMessage: "Nhập địa chỉ của bạn",
      },
    },

    username: {
      notEmpty: {
        errorMessage: "Nhập username",
      },
    },

    role: {
      notEmpty: {
        errorMessage: "Chọn quyền hạn của bạn",
      },
    },

    password: {
      notEmpty: {
        errorMessage: "Nhập mật khẩu của bạn",
      },
    },
  }),
  handleValidationErrors,
];

exports.editUser = [
  (req, res, next) => {
    res.view = `admin/users/edit`;
    next();
  },

  checkSchema({
    name: {
      notEmpty: true,
      errorMessage: "Nhập tên đầy đủ của bạn",
    },

    email: {
      notEmpty: {
        errorMessage: "Nhập email của bạn",
      },
      isEmail: {
        errorMessage: "Nhập email hợp lệ",
      },
    },

    phone: {
      notEmpty: {
        errorMessage: "Nhập số điện thoại của bạn",
      },
      isMobilePhone: {
        options: ["vi-VN"],
        errorMessage: "Số điện thoại không hợp lệ",
      },
    },

    address: {
      notEmpty: {
        errorMessage: "Nhập địa chỉ của bạn",
      },
    },

    username: {
      notEmpty: {
        errorMessage: "Nhập username",
      },
    },

    role: {
      notEmpty: {
        errorMessage: "Chọn quyền hạn của bạn",
      },
    },
  }),
  handleValidationErrors,
];
