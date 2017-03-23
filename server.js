// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoos = require('mongoose');

//Require Schemas
var Article = require('./server/model.js');

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 8080; // Sets an initial port for the listener

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

// -------------------------------------------------

// MongoDB Configuration configuration
mongoose.connect('mongodb://heroku_7zv5tzm5:heroku_7zv5tzm5@ds139430.mlab.com:39430/heroku_7zv5tzm5');
var db = mongoose.connection;

// Log errors
db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

// Log successful connection
db.once('open', function() {
	console.log('Mongoose connection successful.')
})

// -------------------------------------------------

// Main Route. This route will redirect to our rendered React application
app.get('/', function(req, res){
	console.log("Im loading the Index page.");
  res.sendFile('./public/index.html');
});

// Route to get all the saved articles
app.get('/api/saved', function(req,res) {

	Article.find({})
		.exec(function(err, doc) {

			if(err) {
				console.log(err);
			} else {
				res.send(doc);
			}
		})
})

// This is the route we will send POST requests to save each search.
app.post('/api/saved', function(req, res){
	var newArticle = new Article(req.body);
	//test data collection
    console.log("BODY: " + req.body);

    var title = req.body.title;
    var date = req.body.date;
    var url = req.body.url;

    newArticle = save.(function(err, doc){
    	if(err){
    		console.log(err);
    	} else {
    		res.send(doc._id);
    	}
    });

});

// Route to delete an article from the saved list
app.delete('/api/saved/', function(req, res){

	var url = req.param('url');

	Article.find({"url": url}).remove().exec(function(err, data){
		if(err){
			console.log(err);
		}
		else {
			res.send("Deleted");
		}
	});
});

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


  // Here we'll save the location based on the JSON input. 
  // We'll use Date.now() to always get the current date time
//   db.history.insert({"title": req.body.title, "date": Date.now(), "url": req.body.url}, function(err){
//     if(err){
//       console.log(err);
//     }
//     else {
//       res.send("Saved Search");
//     }
//   })
// });