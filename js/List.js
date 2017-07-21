$(document).ready(function() {
  showList();
  removeShowList();
  showList();

  function showList() {
    $.getJSON( "/products", function( data ) {
      console.log(data[0]);
      var items = [];

      items.push( "<table id='list-table'>" );

      items.push( "<tr>" );
      items.push( "<th>ID</th>" );
      items.push( "<th>Name</th>" );
      items.push( "<th>Price</th>" );
      items.push( "</tr>" );

      $.each( data, function( i ) {
        items.push( "<tr>" );
        items.push( "<th>" + data[i].ID + "</th>" );
        items.push( "<th>" + data[i].NAME + "</th>" );
        items.push( "<th>£" + data[i].PRICE + "</th>" );
        items.push( "</tr>" );
      });

      items.push( "</table>" );

      $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
      }).appendTo( "body" );
    });
  }

  function removeShowList() {
    $.closest('table#list-table').remove();
  }
});
