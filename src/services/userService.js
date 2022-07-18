const { User } = require('../database/models');
const throwConflict = require('../errors/throwConflict');
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
  console.log(users);
  return users;
};

module.exports = { userFunction, getUser };
