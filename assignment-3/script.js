$(document).ready(function() {
 var element = document.getElementById("span1");
 var elementStyle = element.style;
 var secondele = document.getElementById("span2");
 function css(el, styles) {
	    for (var property in styles)
	        el.style[property] = styles[property];
	}
 css(secondele, elementStyle);
});