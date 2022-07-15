const joi = require('joi');

const message = 'Some required fields are missing';

const loginSchema = joi.object().keys({
  email: joi.string().email().required().messages({
    'string.email': message,
    'string.required': message,
    'string.empty': message,
  }),
  password: joi.string().required().messages({
    'string.required': message,
    'string.empty': message,
  }),
});

module.exports = { loginSchema };