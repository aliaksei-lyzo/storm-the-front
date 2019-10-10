const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const httpStatus = require('http-status');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const { logger } = require('./logger');
const config = require('./config');
const routes = require('./routes');
const { connect } = require('./mongo');

connect();

const app = express();

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.options(
  '*',
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

/* SWAGGER MIDDLEWARE */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
/* SWAGGER MIDDLEWARE */

app.use('/', routes);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  logger.error(err);
  res.status(httpStatus.NOT_FOUND).json(err);
});

app.listen(config.port, () => logger.info(`Listening on port ${config.port}`));
