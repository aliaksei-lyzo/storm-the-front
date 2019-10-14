const { body } = require('express-validator');

const newsValidationRules = () => {
  return [body('title').exists(), body('body').exists()];
};

module.exports = {
  newsValidationRules,
};
