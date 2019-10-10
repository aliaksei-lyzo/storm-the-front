/* eslint-disable no-param-reassign */
const util = require('util');

const newError = (source, msg) => {
  if (source !== null && source !== undefined) msg = util.format('%s: [%s]', msg, util.inspect(source));
  if (source && source.stack) msg += `\n${source.stack}`;
  return new Error(msg);
};
const throwError = (code, errorType, errorMessage) => error => {
  if (!error) error = new Error(errorMessage || 'Default Error');
  error.code = code || error.code;
  error.errorType = code || error.errorType;
  throw error;
};
const throwIf = (fn, code, errorType, errorMessage) => result => {
  if (fn(result)) {
    return throwError(code, errorType, errorMessage)();
  }
  return result;
};

module.exports = {
  newError,
  throwError,
  throwIf,
};
