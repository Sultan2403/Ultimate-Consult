import validator from "validator";

export const validateAdminLogin = (formData) => {
  const errors = {};

  if (!formData.email || formData.email.trim() === "") {
    errors.email = "Email is required";
  } else if (!validator.isEmail(formData.email.trim())) {
    errors.email = "Email must be a valid email address";
  }

  if (!formData.password || formData.password.trim() === "") {
    errors.password = "Password is required";
  } else if (formData.password.trim().length < 6) {
    errors.password = "Password must be at least 6 characters long";
  }

  return errors;
};