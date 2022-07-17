const throwConflict = (message) => {
  const error = new Error(message);
  error.status = 409;
  error.name = 'Conflict';
  throw error;
};

module.exports = throwConflict;
