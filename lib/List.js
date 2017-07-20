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

List.prototype.editElementInList = function (id, name, price, description) {
  this.list[id-1][1] = name;
  this.list[id-1][2] = price;
  this.list[id-1][3] = description;
};

module.exports = List;
