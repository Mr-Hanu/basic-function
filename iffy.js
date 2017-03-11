var area = (function(){			// The variable called area holds the value returned from the function, rather
	var width = 3;				// than storing the function itself so that it can be called either. 
	var height = 2;				// it is immediately called, thats why its called an immediately invoked 
	return width * height;		// function expression (iife/iffy) 
}())							// the final parantheses () tells the intepreter to call the function immediately 
