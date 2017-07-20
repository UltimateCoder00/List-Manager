describe("List", function() {
  var List = require('../lib/List');
  var list;

  beforeEach(function() {
    list = new List();
  });

  describe('Check list at initialisation', function() {
    it("Should return empty multi-dimensional list", function() {
      expect(list.viewList()).toEqual([]);
    });
  });

  describe('Add element to array', function() {
    it("Should return new list", function() {
      list.addElementToList("Apples", "1.00", "Imported from Africa")
      expect(list.viewList()).toEqual([[1, "Apples", "1.00", "Imported from Africa"]]);
    });
  });
});
