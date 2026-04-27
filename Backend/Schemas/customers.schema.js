const { Joi } = require("celebrate");
const { parsePhoneNumberFromString } = require("libphonenumber-js");

const createCustomerSchema = Joi.object({
  firstName: Joi.string().trim().min(3).required().messages({
    "any.required": "First name is required",
    "string.empty": "First name cannot be empty",
  }),

  lastName: Joi.string().trim().min(3).required().messages({
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
    .required()
    .custom((value, helpers) => {
      const phone = parsePhoneNumberFromString(value);
      if (!phone || !phone.isValid()) {
        return helpers.message(
          "Phone number must be a valid international phone number",
        );
      }
      return value;
    })
    .messages({
      "string.empty": "Phone number cannot be empty",
      "string.base": "Phone number is invalid",
    }),

    businessName: Joi.string().trim().required().messages({
      "string.base": "Business name must be a string",
      "string.empty": "Business name is string",
    }),

    message: Joi.string().trim().required().min(50).messages({
      "string.base": "Message must be a string",
      "string.empty": "Message cannot be empty",
      "string.min": "Message must be at least 50 characters long",
    }),
}).options({ stripUnknown: true });

module.exports = { createCustomerSchema };
