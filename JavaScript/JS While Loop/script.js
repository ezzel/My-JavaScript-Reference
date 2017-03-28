// Printing all numbers between -10 and 20
console.log("Printing all numbers between -10 and 20");
var number = -10;
while (number <= 20) {
	console.log(number);
	number++;
}
//Printing all even numbers between 10 and 40
console.log("Printing all even numbers between 10 and 40")
number = 10;
while (number <= 40) {
	if (number % 2 === 0) {
		console.log(number);
	}
	number++;
}
//Printing all odd numbers between 300 and 333
console.log("Printing all odd numbers between 300 and 333")
number = 300;
while (number <= 333) {
	if (number % 2 !== 0) {
		console.log(number);
	}
	number++;
}
//Printing all numbers divisible by 5 and 3 between 5 and 50
console.log("Printing all numbers divisible by 5 and 3 between 5 and 50")
number = 5;
while (number <= 50) {
	if((number % 5 === 0) && (number % 3 === 0)){
		console.log(number);
	}
	number++;
}
