const joi = require('joi');

const message = 'Some required fields are missing';

const postSchema = joi.object().keys({
  title: joi.string().required().messages({
    'string.title': message,
    'string.required': message,
    'string.empty': message,
  }),
  content: joi.string().required().messages({
    'string.required': message,
    'string.empty': message,
  }),
  categoryIds: joi
    .array()
    .items(joi.number().required())
    .required()
    .messages({ 'array.required': message }),
});

module.exports = { postSchema };
