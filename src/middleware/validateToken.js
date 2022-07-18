const { validateToken } = require('../helpers/jwt');

const tokenValidate = async (req, _res, next) => {
  const token = req.headers.authorization;
  await validateToken(token);
  next();
};

module.exports = tokenValidate;
