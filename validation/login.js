const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateLoginInput(data) {
  let errors = {};

  data.roll = !isEmpty(data.roll) ? data.roll : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.roll)) {
    errors.roll = "roll field is required";
  } 

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};
