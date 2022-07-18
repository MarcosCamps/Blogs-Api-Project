const throwAuthorized = (message) => {
  const error = new Error(message);
  error.status = 401;
  error.name = 'Unauthorized';
  throw error;
};

module.exports = throwAuthorized;
