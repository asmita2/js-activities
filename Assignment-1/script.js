$(document).ready(function() {
	$(".searchbox").each(function() {
  
	  var $inp = $(this).find("input:text"),
	      $cle = $(this).find(".cleartext");

	  $inp.on("input", function(){
	    $cle.toggle(!!this.value);    
	  });

	  $(this).on('click', function(e) {
	  	$(".searchbox").addClass('search-in-focus');
	  	 console.log('clicked');
	  });

	  $(".searchbox #search-input").focus(function() {
       $(".searchbox").addClass('search-in-focus');
      console.log("in focus");
    });
	  $(".searchbox #search-input").blur(function() {
      $(".searchbox").removeClass('search-in-focus');
      console.log("in blur");
    });

	  $cle.on('click', function(e) {
	  	$(".searchbox").removeClass('search-in-focus');
	    e.preventDefault();
	    $inp.val("").trigger("input");
	  });
  
	});
});
