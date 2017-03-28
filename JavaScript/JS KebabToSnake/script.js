// Determining if the number is even or odd
function kebabToSnake(str){
	var strToSnake = str.replace(/-/g, "_");
	return strToSnake;
}

var stringInput = prompt("Please enter a kebab format string of words...");

alert("The kebab to snake conversion of " + stringInput +" is " + kebabToSnake(stringInput));