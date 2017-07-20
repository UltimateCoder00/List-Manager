function List() {
  this.list = [["id","name","price","description"]];
}

List.prototype.viewName = function () {
  return this.list;
};

module.exports = List;
