const { newError } = require('../../utils/errors');

class Facade {
  constructor(Model) {
    this.Model = Model;
  }

  findById(id) {
    return this.Model.findById(id).catch(e => {
      throw newError(e, `Mongo Error retrieving data by id ${JSON.stringify(id)} from ${this.Model.collection.name}`);
    });
  }

  findOne(query) {
    return this.Model.findOne(query).catch(e => {
      throw newError(
        e,
        `Mongo Error retrieving data by query ${JSON.stringify(query)} from ${this.Model.collection.name}`,
      );
    });
  }

  findAll(query) {
    return this.Model.find(query).catch(e => {
      throw newError(
        e,
        `Mongo Error retrieving data by query ${JSON.stringify(query)} from ${this.Model.collection.name}`,
      );
    });
  }

  create(data) {
    const newData = new this.Model(data);
    return this.Model.create(newData).catch(e => {
      throw newError(
        e,
        `Mongo Error creating data with body ${JSON.stringify(data)} for ${this.Model.collection.name}`,
      );
    });
  }

  updateById(id, data) {
    return this.Model.findOneAndUpdate(
      {
        _id: id,
      },
      data,
    ).catch(e => {
      throw newError(
        e,
        `Mongo Error udating data by id ${id} with body ${JSON.stringify(data)} for ${this.Model.collection.name}`,
      );
    });
  }

  removeById(id, data) {
    return this.Model.findOneAndRemove(
      {
        _id: id,
      },
      data,
    ).catch(e => {
      throw newError(e, `Mongo Error removing data by id ${JSON.stringify(id)} for ${this.Model.collection.name}`);
    });
  }
}

module.exports = Facade;
