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

  describe('Add element to List', function() {
    it("Should return new list", function() {
      list.addElementToList("Apples", "1.00", "Imported from Africa")
      expect(list.viewList()).toEqual([[1, "Apples", "1.00", "Imported from Africa"]]);
    });
  });

  describe('Delete element from List', function() {
    it("Should return new list", function() {
      list.addElementToList("Apples", "1.00", "Imported from Africa")
      list.addElementToList("Banana", "2.00", "Imported from EU")
      list.removeElementFromList(1)
      expect(list.viewList()).toEqual([[2, "Banana", "2.00", "Imported from EU"]]);
    });
  });

  describe('Edit element in List', function() {
    it("Should return new list", function() {
      list.addElementToList("Apples", "1.00", "Imported from Africa")
      list.editElementInList(1, "Apples", "1.50", "Imported from Africa")
      expect(list.viewList()).toEqual([[1, "Apples", "1.50", "Imported from Africa"]]);
    });
  });

  describe('Display List', function() {
    it("Should return list", function() {
      list.addElementToList("Apples", "1.00", "Imported from Africa")
      list.addElementToList("Banana", "2.00", "Imported from EU")
      expect(list.viewList()).toEqual([
          [1, "Apples", "1.00", "Imported from Africa"],
          [2, "Banana", "2.00", "Imported from EU"]
        ]);
    });
  });
});
