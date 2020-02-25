const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegistrationInput(data) {
    let errors = {};

    data.username = !isEmpty(data.username) ? data.username: "";
    data.email = !isEmpty(data.email) ? data.email: "";
    data.password = !isEmpty(data.password) ? data.password: "";
    data.password2 = !isEmpty(data.password2) ? data.password2: "";

    if(Validator.isEmpty(data.username)) {
        errors.username = "Please fill Username field";
    }

    if(Validator.isEmpty(data.email)) {
        errors.username = "Please fill Email field";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Please fill Password field";
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm Password field is required";
    }
    if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
        errors.password = "Password must be at least 8 characters";
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};