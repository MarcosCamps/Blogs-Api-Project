const { User } = require('../database/models');
const throwConflict = require('../errors/throwConflict');
const throwNotFound = require('../errors/throwNotFound');
const { creatingToken } = require('../helpers/jwt');

const userFunction = async (userLogin) => {
  const user = await User.findOne({
    where: { email: userLogin.email },
  });
  if (user) {
    return throwConflict('User already registered');
  }
  const createdUser = await User.create(userLogin);
  const { password, ...rest } = createdUser;
  const token = creatingToken(rest);
  return token;
};

const getUser = async () => {
  const users = await User.findAll({
    raw: true,
    attributes: { exclude: ['password'] },
  });
  return users;
};

const getById = async (id) => {
  const user = await User.findOne({
    raw: true,
    where: { id },
  });
  if (!user) {
    throwNotFound('User does not exist');
  }
  const { password, ...newUserId } = user;
  return newUserId;
};

module.exports = { userFunction, getUser, getById };
