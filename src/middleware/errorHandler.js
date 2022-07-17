const errorMiddleware = ({ status, message }, _req, res, _next) => {
  res.status(status).json({ message });
};

module.exports = errorMiddleware;
