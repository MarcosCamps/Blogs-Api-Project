const { User } = require('../database/models');
const { creatingToken } = require('../helpers/jwt');

const loginFunction = async (email, password) => {
  const userEmail = await User.findOne({ where: { email } });
  if (!userEmail || userEmail.password !== password) {
    return { message: 'Invalid fields' };
  }
  const token = creatingToken(email);
  console.log(token);
  return { token };
};

module.exports = { loginFunction };