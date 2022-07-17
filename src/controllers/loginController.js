const { loginFunction } = require('../services/loginService');
const { loginSchema } = require('../schemas/loginSchema');

const getLoginUser = async (req, res) => {
  const { email, password } = req.body;
  const { error } = loginSchema.validate({
    email,
    password,
  });
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  const login = await loginFunction(email, password);
  if (login.message) {
    return res.status(400).json(login);
  }
  res.status(200).json({ token: login.token });
};

module.exports = { getLoginUser };
