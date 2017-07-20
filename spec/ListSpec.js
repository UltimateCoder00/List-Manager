describe("List", function() {
  var List = require('../lib/List');
  var list;

  beforeEach(function() {
    list = new List();
  });

  it("should return name", function() {
    expect(list.viewName()).toEqual([["id","name","price","description"]]);
  });
});
