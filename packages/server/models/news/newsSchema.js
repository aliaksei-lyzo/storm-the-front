const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  id: String,
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  lastModifiedDate: {
    type: Date,
    default: Date.now,
  },
});

newsSchema.pre(/update/i, function update(next) {
  this.update(
    {},
    {
      $set: {
        lastModifiedDate: new Date(),
      },
    },
  );
  return next();
});

module.exports = newsSchema;
