const throwNotFound = (message) => {
  const error = new Error(message);
  error.status = 404;
  error.name = 'Not Found';
  throw error;
};

module.exports = throwNotFound;
