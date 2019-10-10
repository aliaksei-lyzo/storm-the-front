module.exports = {
  name: 'Server side configuration',
  port: process.env.PORT || 8080,
  env: process.env.NODE_ENV || 'development',
  secret: 'f1dGS9wFLd',
  mongo: {
    host: 'localhost',
    port: '27017',
    database: 'communities',
  },
};
