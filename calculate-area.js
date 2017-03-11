function calculateArea(width, height) {								// width and height are the parameters
	var area = width * height;										// declaring a variable that stores width * height
	return area;													// 'return' keyword returns value back to caller
}

var wallOne = calculateArea(3, 5);									// variable is declared and calls function. Arguments parsed are 3 for width and 5 for height.
var wallTwo = calculateArea(8, 5);
