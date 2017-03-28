// Printing all numbers between -10 and 20
console.log("Printing all numbers between -10 and 20");
for (var number = -10; number <= 20; number++) {
	console.log(number);
}
//Printing all even numbers between 10 and 40
console.log("Printing all even numbers between 10 and 40")
for (var number = 10; number <= 40; number++) {
	if (number % 2 === 0) {
		console.log(number);
	}
}
//Printing all odd numbers between 300 and 333
console.log("Printing all odd numbers between 300 and 333")
for (var number = 300; number <= 333; number++) {
	if (number % 2 !== 0) {
		console.log(number);
	}
}
//Printing all numbers divisible by 5 and 3 between 5 and 50
console.log("Printing all numbers divisible by 5 and 3 between 5 and 50")
for (var number = 5; number <= 50; number++) {
	if((number % 5 === 0) && (number % 3 === 0)){
		console.log(number);
	}
}
