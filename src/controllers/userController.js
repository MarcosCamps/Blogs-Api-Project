const { userFunction, getUser } = require('../services/userService');
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

const getUsers = async (req, res) => {
  const users = await getUser();
  console.log(users);
  res.status(200).json(users);
};

module.exports = { handleUser, getUsers };
