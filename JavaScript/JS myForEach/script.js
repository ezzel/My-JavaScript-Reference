// myForEach function
Array.prototype.myForEach = function(func){
	for(var i = 0; i < this.length; i++) {
		// Your passed function (can be anonymous) will be executed in this fashion.
		func(this[i],i);
	}
}

var arr = [1,2,3,4,5];
arr.myForEach(function(element,index){
	console.log("[" + index + "] --- " + element);
});

// arr.myForEach(alert);


// 1 - Create a variable prototype named myForEach for example.
// 2 - Assign a anonymous function that gets executed when you call myForEach that takes a function as an argument. 
// 3 - The anonymous function gets executed every time you invoke /call it using the (); parenthesis. 
// 4 - Inside the anonymous function you have the abililty to pass arguments to call the function itself, in this case this[i], i.
// 5 - Create an array and assign values to the array. 
// 6 - Call your new forEach function with the paramaters needed to be used in this case element and index to be executed with your anonymouse function.