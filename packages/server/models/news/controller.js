const Controller = require('../common/controller');
const Facade = require('./facade');

class NewsController extends Controller {}

module.exports = new NewsController(Facade);
