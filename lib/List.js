function List() {
  this.list = [new Array(5)];
}

List.prototype.viewList = function () {
  return this.list;
};

module.exports = List;
