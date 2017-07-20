function List() {
  this.list = [];
}

List.prototype.viewList = function () {
  return this.list;
};

List.prototype.addElementToList = function (name, price, description) {
  this.list.push([this.list.length+1, name, price, description])
};

module.exports = List;
