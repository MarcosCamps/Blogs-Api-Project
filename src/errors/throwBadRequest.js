const throwBadRequest = (message) => {
  const error = new Error(message);
  error.status = 400;
  error.name = 'Bad Request';
  throw error;
};

module.exports = throwBadRequest;
