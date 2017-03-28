// Finding the factorial of a input number
function factorial(num) {
	var fact = 1;
	if (num === 0) {
		return fact;
	}
	for (var i = num; i > 0; i -= 1) {
		fact *= i;
	}
	return fact;
}

var stringInput = prompt("Please enter a number to calulate the factorial.");
var input = parseInt(stringInput);

alert("The factorial of " + stringInput +" is " + factorial(input));
