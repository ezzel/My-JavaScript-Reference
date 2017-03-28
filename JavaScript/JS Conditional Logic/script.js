var age = parseint(prompt("What is your age?"));
if (age <= 0 || isNaN(age)) {
	alert("An error has occured.");	
}
else if (age) === 21) {
	alert("Happy 21st Birthday!!");
}

if (age % 2 !== 0) {
	alert("You have an odd age!");
}

// if (Math.sqrt(parseInt(age)) % 1 === 0) {
// 	alert("Perfect square!");
// }

if (age % Math.sqrt(age) === 0) {
	alert("Perfect square!");
}
