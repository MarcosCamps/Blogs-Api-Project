const joi = require('joi');

const userSchema = joi.object().keys({
  displayName: joi.string().min(8).required(),
  email: joi.string().email(),
  password: joi.string().min(6).required(),
  image: joi.string().uri().required(),
});

module.exports = { userSchema };
