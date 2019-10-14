const Model = require('./model');
const Facade = require('../common/facade');

class NewsFacade extends Facade {}

module.exports = new NewsFacade(Model);
