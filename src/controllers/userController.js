const { userFunction } = require('../services/userService');
const { userSchema } = require('../schemas/userSchema');
const throwBadRequest = require('../errors/throwBadRequest');

const handleUser = async (req, res) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return throwBadRequest(error.message);
  }
  const token = await userFunction(req.body);
  res.status(201).json({ token });
};

module.exports = { handleUser };
