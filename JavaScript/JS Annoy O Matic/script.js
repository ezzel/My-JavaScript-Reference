do{
	var message = prompt("Are we there yet?");
}
while(!(message.toUpperCase().includes("YES") || message.toUpperCase().includes("YEAH")));
alert("Yes, we finally made it!");