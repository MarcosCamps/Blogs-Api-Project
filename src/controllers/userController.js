const { userFunction, getUser, getById } = require('../services/userService');
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

const getUsers = async (_req, res) => {
  const users = await getUser();
  res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await getById(id);
  res.status(200).json(user);
};

module.exports = { handleUser, getUsers, getUserById };
