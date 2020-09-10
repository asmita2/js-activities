
$( function() {
  $( "#accordion" ).accordion({
  	collapsible: true
  	// disabled: true
  	// active: false;
  });
  // Getter
  var collapsible = $( "#accordion" ).accordion( "option", "collapsible" );
 
	// Setter
	$( "#accordion" ).accordion( "option", "collapsible", true );

	// // Getter
	// var active = $( "#accordion" ).accordion( "option", "active" );
 
	// // Setter
	// $( "#accordion" ).accordion( "option", "active", false );


	// var disabled = $( "#accordion" ).accordion( "option", "disabled" );
 
	// Setter
	// $( "#accordion" ).accordion( "option", "disabled", true );
});
