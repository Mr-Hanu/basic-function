function showPlotSize(){
	var width = 3;									// these are local scope variables stored inside the function
	var height = 2;									// other variables in other functions can have the same expression
	return "Area: " + (width * height);
}
var msg = showArea()								// this is a global scope variable

function showGardenSize(){
	var width = 12;
	var height = 25;
	return width * height;
}
var msg = showGardenSize();							// another global scope variable, with the same name, but a different value
													// this creates a naming conflict