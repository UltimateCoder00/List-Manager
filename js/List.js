$(document).ready(function() {
  var list = new List();
  list.addItemToList("Apples", "1.00", "Imported from Africa")

  $(function(){
    $.getJSON('/products', function(data) {
        console.log(data);
        alert(list.viewList())
    });
  });

  // $(function() {
  //   $("p").text(list.viewList());
  //
  // });
});
