const jwt = require('jsonwebtoken');
const throwAuthorized = require('../errors/throwAuthorized');

const creatingToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET, {
    expiresIn: '1h',
    algorithm: 'HS256',
  });
  return token;
};

const validateToken = (token) => {
  if (!token) {
    throwAuthorized('Token not found');
  }
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    return data;
  } catch (error) {
    throwAuthorized('Expired or invalid token');
  }
};

module.exports = { creatingToken, validateToken };
