const { Joi } = require("celebrate");
const { parsePhoneNumberFromString } = require("libphonenumber-js");

const customerSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    "any.required": "First name is required",
    "string.empty": "First name cannot be empty",
  }),

  lastName: Joi.string().trim().required().messages({
    "any.required": "Last name is required",
    "string.empty": "Last name cannot be empty",
  }),

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

 phoneNumber: Joi.string()
  .trim()
  .optional()
  .custom((value, helpers) => {
    const phone = parsePhoneNumberFromString(value);
    if (!phone || !phone.isValid()) {
      return helpers.message("Phone number must be a valid international phone number");
    }
    return value;
  })
  .messages({
    "string.empty": "Phone number cannot be empty",
    "string.base": "Phone number is invalid",
  }),
}).options({stripUnknown: true});

module.exports = customerSchema;
