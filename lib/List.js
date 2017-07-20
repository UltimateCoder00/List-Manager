function List() {
  this.list = [];
}

List.prototype.viewList = function () {
  return this.list;
};

List.prototype.addElementToList = function (name, price, description) {
  this.list.push([this.list.length+1, name, price, description]);
};

List.prototype.removeElementFromList = function (id) {
  this.list.splice(id-1, 1);
};

module.exports = List;
