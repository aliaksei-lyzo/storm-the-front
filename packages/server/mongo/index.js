const mongoose = require('mongoose');
const config = require('../config');
const { logger } = require('../logger');

module.exports.connect = () =>
  mongoose
    .connect(`mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.database}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => logger.info(`Connected to database ${config.mongo.database}`))
    .catch(e => logger.error(e));
