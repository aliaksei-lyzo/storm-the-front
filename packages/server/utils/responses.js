const sendSuccess = (res, status, message) => data => {
  res.status(status || 200).json({
    status: 'success',
    message,
    data,
  });
};
const sendError = (res, status, message) => error => {
  res.status(status || error.status).json({
    status: 'error',
    message: message || error.message,
    error,
  });
};

module.exports = {
  sendSuccess,
  sendError,
};
