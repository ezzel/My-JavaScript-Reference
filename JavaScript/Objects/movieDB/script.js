// movieDB
var movieDB = [
{
	title: "Logan",
	rating: 5,
	hasWatched: true
},
{
	title: "The Pursuit of Happyness",
	rating: 5,
	hasWatched: true
},
{
	title: "The Dark Knight",
	rating: 5,
	hasWatched: true
},
{
	title: "The Power Rangers",
	rating: 2,
	hasWatched: false
}
]

function buildMovie(movie){
	var result = "You have ";
	if(movie.hasWatched === true){
		result += "watched "
	}
	else{
		result += "not seen "
	}
	result += "\"" + movie.title + "\" "
	result += movie.rating + " stars."
	return result;

}

movieDB.forEach(function(movie,index){
	console.log(buildMovie(movie));
});