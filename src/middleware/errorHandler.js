const errorMiddleware = ({ status, message }, _req, res, _next) => {
  res.status(status || 500).json({ message });
};

module.exports = errorMiddleware;
