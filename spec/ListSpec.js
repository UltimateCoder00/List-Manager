describe("List", function() {
  var List = require('../lib/List');
  var list;

  beforeEach(function() {
    list = new List();
  });

  describe('Check list at initialisation', function() {
    it("Should return empty multi-dimensional list", function() {
      expect(list.viewList()).toEqual([new Array(5)]);
    });
  });
});
