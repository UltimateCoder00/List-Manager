$(document).ready(function() {

  $.getJSON( "/products", function( data ) {
    console.log(data[0]);
    var items = [];
    $.each( data, function( i ) {
      items.push( "<li id='" + i + "'>" + data[i].PRICE + "</li>" );
    });

    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  });
});
