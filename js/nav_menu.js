/*
	By setting 'use strict' we ensure that we are building clean code and not breaking any rules. Helps with future-friendliness.
*/
'use strict';

console.log("js is running");
/*
	Here we are going to start working with javascript and Zepto (similar to jQuery, but more compact), libraries that makes working with javascript easier by moving us away from browser-specific (js) concerns.

	Zepto is (by default) mapped to the $ symbol, so to call on it we would need to start our statement with $ like the following: $("selector").method();
	selector = what is the script selecting? (like in CSS)
	method = what is the script doing with the selected item?

	To start off with, we want to tell Zepto to run only once the entire page (the DOM) has loaded. Otherwise Zepto may not see all the items of the DOM, and will not be able to interact with them accordingly.

	For example the statement below reads as follows:
	var width - Create a variable with the name of 'width'
	$ - Zepto selector (aka. use Zepto for this)
	$(window) - Zepto, go and select the window (viewport)
	$(window).width() - Zepto, check the width of the viewport using the .width method
	var width = $(window).width(); - The new variable of 'width' should be equal to the width of the viewport.

	Remember that EVERY COMPLETE STATEMENT in javascript must end with a semicolon.
*/



/*
	Here we are using Zepto to check the width of the page, with which we then cast into the 'width' variable
*/
var width = $(window).width();



/* 
	Here is some good javascript code for debugging, takes whatever info you want and makes it appear in the developer tool's console
*/
// var variable = "Debugging test";
// console.log("Info: "+variable);




/*
	If the 'width' variable (width of the window) is less then 500px, then we want to perform some actions
*/
if (width < 500) {
	console.log("width<500");
	/*
		The .removeClass method does just as its name suggests - it removes a class from the selected element.
		If we were to do this without a library like Zepto, we would achieve the same effect with:
	*/
	// document.getElementById("nav-toggle").className = "";
	$("#nav-toggle").removeClass("hidden");
	
	/*
		The .attr method here is being used to set the 'aria-hidden' attribute to 'false', so that our navigation toggle button is now visible to accessibility tools.
		If we were to do this without a library like Zepto, we would achieve the same effect with: 
	*/
	// document.getElementById("nav-toggle").setAttribute("aria-hidden", "false");
	$("#nav-toggle").attr("aria-hidden", "false"); 

	/*
		The .addClass method adds a specified class to the selected element, in this case setting our navigation to hide.
		If we were to do this without a library like Zepto, we would achieve the same effect with:
	*/
	// document.getElementById("nav-items").className += " hidden";
	$("#nav-items").addClass("hidden"); 

	/*
		Since we are now hiding the menu, we need to set the aria-hidden attribute to true.
		If we were to do this without a library like Zepto, we would achieve the same effect with:
	*/
	// document.getElementById("nav-items").setAttribute("aria-hidden", "true");
	$("#nav-items").attr("aria-hidden", "true"); 

	/*
		By setting the 'aria-labelledby' attribute, we indicate the relationship between the #nav-items and the #nav-toggle element.
	*/
	$("#nav-items").attr("aria-labelledby", "nav-toggle"); 

}



/*
	Here we are running a function when #nav-toggle is clicked. 
	If we were to do this without a library like Zepto, we would achieve the same effect with:
*/
// document.getElementById("nav-toggle").addEventListener("click", function() { 
$("#nav-toggle").click( function() { 

	/*
		Libraries like Zepto make it easier to switch classes on or off by adding in prebuilt methods that let you 'toggle' classes.
	*/
	$("#nav-items").toggleClass("hidden");


	/*
		Here we check if our #nav-items is hidden or not, as we want to change what it does accessibility-wise as a result. The first statement is - if .hidden, then...
	*/
	if ( $("#nav-items").hasClass("hidden") ) {
		
		/*
			We want to make sure that we set the #nav-items as hidden (to accessible devices) and that the #nav-toggle understands that the navigation has not been opened.	
		*/
		$("#nav-items").attr("aria-hidden", "true");
		$("#nav-toggle").attr("aria-expanded", "false");
	
	} 
	/*
		Here we have the 'else' statement of if not .hidden, then...
	*/
	else {

		/*
			Since the menu is now visible, we want to set the #nav-items as visible (to accessible devices) and the #nav-toggle to understand that the navigation has been expanded.
		*/
		$("#nav-items").attr("aria-hidden", "true");
		$("#nav-toggle").attr("aria-expanded", "true");

		/*
			We can also redirect the user's focus to the first navigation item to help them understand that it has now been toggled open.
			If we were to do this without a library like Zepto, we would achieve the same effect with:
		*/
		// document.getElementById("nav-items").children[0].children[0].focus();
		$("#nav-items a").first().focus();
	}
});