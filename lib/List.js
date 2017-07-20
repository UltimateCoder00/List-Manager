function List() {
  this.list = [];
}

List.prototype.viewList = function () {
  return this.list;
};

List.prototype.addItemToList = function (name, price, description) {
  this.list.push([this.list.length+1, name, price, description]);
};

List.prototype.removeItemFromList = function (id) {
  this.list.splice(id-1, 1);
};

List.prototype.editItemInList = function (id, name, price, description) {
  this.list[id-1][1] = name;
  this.list[id-1][2] = price;
  this.list[id-1][3] = description;
};

List.prototype.viewSingleItem = function (id) {
  return this.list[id-1]
};

module.exports = List;
