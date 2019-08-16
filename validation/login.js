const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateLoginInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.roll = !isEmpty(data.roll) ? data.roll : "";
  data.password = !isEmpty(data.password) ? data.password : "";
// roll checks
  if (Validator.isEmpty(data.roll)) {
    errors.roll = "roll field is required";
  } 
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};
