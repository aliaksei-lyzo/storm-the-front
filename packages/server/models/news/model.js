const mongoose = require('mongoose');
const schema = require('./newsSchema');

module.exports = mongoose.model('news', schema);
