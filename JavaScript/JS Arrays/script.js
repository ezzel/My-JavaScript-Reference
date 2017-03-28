// Print Reverse
function printReverse(arr){
	for (var i = arr.length-1; i >= 0; i--){
		console.log(arr[i]);
	}
}
// Is the array a uniform array
function isUniform(arr){ 
	var firstItem = arr[0];
	for (var i = 1; i < arr.length; i++){
		if(arr[i] !== firstItem){
			return false;
		}
	}
	return true;
}

function sumArray(arr){
	var total = 0;
	arr.forEach(function(item){
		total+=item;
	});
	return total;
}

function max(arr){
	var max = arr[0];
	arr.forEach(function(item,index){
		if(arr[index] > max){
			max = arr[index];
		}
	});
	return max;
}
// This is default array with values
var arr = [1,2,3,4,5,6,7,8,9,10];