const { Joi } = require("celebrate");

const adminLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
})
  .required()
  .options({ stripUnknown: true });

module.exports = { adminLoginSchema };
