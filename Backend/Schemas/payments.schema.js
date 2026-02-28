const { Joi } = require("celebrate");

const email = Joi.string()
  .trim()
  .lowercase()
  .email({ tlds: { allow: false } })
  .messages({
    "string.email": "Email must be a valid email address",
    "string.empty": "Email cannot be empty",
  })
  .required();

const paymentInitSchema = Joi.object({
  email,
})
  .options({ stripUnknown: true })
  .required();

module.exports = { paymentInitSchema };
