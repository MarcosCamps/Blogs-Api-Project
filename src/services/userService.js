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

module.exports = { userFunction };
