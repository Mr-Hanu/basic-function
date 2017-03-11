function getSize(width, height, depth) {			// function (keyword) is declared and named (getSize)
	var area = width * height;						// width * height is stored in a variable
	var volume = width * height * depth;			// volume is stored in a variable
	var sizes = [area, volume];						// two variables, area and volume, are put in an array, and given to a new variable
	return sizes;									// return the value of var sizes to the caller
}

var areaOne = getSize(3, 2, 3)[0];					// function gets called, with arguments, 0 because first var in array
var volumeOne = getSize(3, 2, 3)[1];				// function gets called, with arguments, 1 because second var in array
