const { validateToken } = require('../helpers/jwt');

const tokenValidate = async (req, _res, next) => {
  const token = req.headers.authorization;
  const data = await validateToken(token);
  req.userId = data.id;
  next();
};

module.exports = tokenValidate;
