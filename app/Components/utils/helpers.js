// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

var helpers = {

	// This function serves our purpose of running the query to The New York Times API. 
	runQuery: function(query, startDate, endDate){
	 	//URL to ping for NYT articles
/*	 	query = "hillary";
	 	startDate = 20160808;
		endDate = 20160809;*/
	 	var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	 	var otherKey = "899f9cbbce8c41de9ca37a6bf43a4dd8";
		var authKey = "?api-key=b1b8d8dd6ef341c2a90ee81716c65d96";
		var query = "&?q="+query+"";
		var startDate = "&?begin_date="+startDate+"";
		var endDate = "&?end_date="+endDate+"";
		var params = query+startDate+endDate;
		console.log(queryURL+authKey+params);
	 	return axios.get(queryURL+authKey+params)
	 		.then(function(response){

	 			console.log(response);
	 			return response.data.response.docs;
	 	});

	},

	// This function hits our own server to retrieve the record of query results
		getHistory: function(){

	 	return axios.get('/api')
	 		.then(function(response){

	 			console.log(response);
	 			return response;
	 		});
		},

	// // This function posts new searches to our database.
	// postHistory: function(location){

	// 	return axios.post('/api', {location: location})
	// 		.then(function(results){

	// 			console.log("Posted to MongoDB");
	// 			return(results);
	// 		})
	// }

}


// We export the helpers function 
module.exports = helpers;