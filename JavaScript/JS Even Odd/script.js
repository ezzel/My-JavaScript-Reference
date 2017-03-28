// Determining if the number is even or odd
function evenOdd(num){
	if(num % 2 === 0){
		console.log("The number is an even number");
		return "even";
	}
	else {
		console.log("The number is an odd number");
		return "odd";
	}
}

var stringInput = prompt("Please enter a number...");
var input = parseInt(stringInput);

alert("The number " + stringInput +" is an " + evenOdd(input) +" number");