const { Joi } = require("celebrate");

const adminLoginSchema = Joi.object({
  email: Joi.string()
    .trim()
    .lowercase()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "any.required": "Email is required",
      "string.empty": "Email cannot be empty",
      "string.email": "Email must be a valid email address",
    }),

  password: Joi.string().trim().min(6).required().messages({
    "any.required": "Password is required",
    "string.empty": "Password cannot be empty",
    "string.min": "Password must be at least 6 characters long",
  }),
});

module.exports = adminLoginSchema;
