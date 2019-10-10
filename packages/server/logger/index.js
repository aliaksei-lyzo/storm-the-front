const winston = require('winston');
const config = require('../config');

const { combine, timestamp, printf } = winston.format;

const myFormat = printf(info => `${info.timestamp}: ${info.message}`);

const level = config.env === 'production' ? ' info' : 'debug';

const logger = winston.createLogger({
  level,
  format: combine(timestamp(), myFormat),
  transports: [new winston.transports.Console(), new winston.transports.File({ filename: 'general.log' })],
});
module.exports = {
  logger,
};
