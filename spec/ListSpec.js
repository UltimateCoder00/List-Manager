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

  describe('Add item to List', function() {
    it("Should return new list", function() {
      list.addItemToList("Apples", "1.00", "Imported from Africa")
      expect(list.viewList()).toEqual([[1, "Apples", "1.00", "Imported from Africa"]]);
    });
  });

  describe('Delete item from List', function() {
    it("Should return new list", function() {
      list.addItemToList("Apples", "1.00", "Imported from Africa")
      list.addItemToList("Banana", "2.00", "Imported from EU")
      list.removeItemFromList(1)
      expect(list.viewList()).toEqual([[2, "Banana", "2.00", "Imported from EU"]]);
    });
  });

  describe('Edit item in List', function() {
    it("Should return new list", function() {
      list.addItemToList("Apples", "1.00", "Imported from Africa")
      list.editItemInList(1, "Apples", "1.50", "Imported from Africa")
      expect(list.viewList()).toEqual([[1, "Apples", "1.50", "Imported from Africa"]]);
    });
  });

  describe('Display List', function() {
    it("Should return list", function() {
      list.addItemToList("Apples", "1.00", "Imported from Africa")
      list.addItemToList("Banana", "2.00", "Imported from EU")
      expect(list.viewList()).toEqual([
          [1, "Apples", "1.00", "Imported from Africa"],
          [2, "Banana", "2.00", "Imported from EU"]
        ]);
    });
  });
});
