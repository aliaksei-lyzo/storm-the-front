class Controller {
  constructor(facade) {
    this.facade = facade;
  }

  findById(id) {
    return this.facade.findById(id);
  }

  findAll(query) {
    return this.facade.findAll(query);
  }

  findOne(query) {
    return this.facade.findOne(query);
  }

  create(data) {
    return this.facade.create(data);
  }

  updateById(id, data) {
    return this.facade.updateById(id, data);
  }

  removeById(id) {
    return this.facade.removeById(id);
  }
}

module.exports = Controller;
