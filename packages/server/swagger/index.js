const options = {
  swaggerDefinition: {
    info: {
      title: 'REST - Storm The Front',
      version: '1.0.0',
      description: 'REST API with Swagger doc',
    },
    schemes: ['http'],
    basePath: '/',
  },
  apis: [
    './routes/**/*.js',
    './swagger/definitions/**/*.yaml',
    './swagger/parameters/**/*.yaml',
    './swagger/responses/**/*.yaml',
  ],
};

const swaggerJSDoc = require('swagger-jsdoc');

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
