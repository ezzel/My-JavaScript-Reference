// A simple todo list with array functions
var todos = [];

function addTodo(){
	var input = prompt("Please enter a new todo...");
	todos.push(input);
	console.log("A new todo has been added!");
	console.log(todos);
}

function viewTodo(){
	console.log("The list of the current todos");
	// console.log(todos);
	console.log("***********");	
	todos.forEach(function(item, index){
		console.log(index + " " + item);
	})
	console.log("***********");
	// alert(todos);
}

function deleteTodo(){
	var index = prompt("Please provide the index of the todo you want to delete...");
	index = parseInt(index);
	//Delete an item in an array with the index and the number of items to delete.
	todos.splice(index,1);
	console.log("The item has been removed from the todo list");
	viewTodo();
}

do {
	var input = prompt("What would you like to do?");
	// If user cancels
	if(input === null) {
		break;
	}

	input = input.toUpperCase();

	if(input === "NEW"){
		addTodo();
	}
	else if(input === "LIST"){
		viewTodo();
	}
	else if(input === "DELETE"){
		deleteTodo();
	}
}
while(!(input.includes("QUIT") || input.includes("CANCEL")));

console.log("You quit the application.")
alert("You quit the application");

