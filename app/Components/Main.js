// Include React 
var React = require('react');

// Include all of the sub-components
var Search = require('./Children/Search');
var Results = require('./Children/Results');
var Saved = require('./Children/Saved');

// Import helper functions similar to ORM's
var helpers = require('./utils/helpers.js');

// This is the main component. 
var Main = React.createClass({

	// Here we set a generic state associated with the number of clicks
	getInitialState: function(){
		return {
			search: {},
			results: [],
			saved: []
			}
	},	

	// This function allows childrens to update the parent.
	setParam: function(parameters){
		console.log(parameters);
		this.setState({
			search: parameters
		})
		console.log(JSON.stringify(this.state) + " is what has been passed.");
	},

	componentDidUpdate: function(prevProps, prevState){
		console.log(prevState);
		if(prevState.search != this.state.search){
			console.log("UPDATED");
			var _self = this;
			console.log(prevState);
			// Run the query for the address
			helpers.runQuery(this.state.query, this.state.startDate, this.state.endDate)
				.then(function(data){
					console.log(data);
					console.log(data.length);
					if (data != _self.state.results) {
						var tempArray = [];
						for (var i = 0; i < data.length; i++) {
							console.log("article "+i+" : "+data[i].headline.main);
							tempArray.push(data[i].headline.main+
											data[i].web_url+
											data[i].pub_date)+
											"<a href='#'>Save</a>");

						}
						console.log(tempArray);
						this.setState({
						 	results: tempArray
						})
					};
				}.bind(this));
		}
	},

	// Here we render the function
	render: function(){
		console.log("Im the start of Main.");
		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron">
						<h2 className="text-center">New York Times Article Finder!</h2>
						<p className="text-center"><em>Search for articles from The NYT Newspaper.</em></p>
					</div>

					<div className="col-md-8 col-md-offset-2">
					
						<Search setParam={this.setParam}/>

					</div>

				</div>

				<div className="row">

					<div className="col-md-8 col-md-offset-2">
				
						<Results article={this.state.results}/>

					</div>

				</div>

				<div className="row">

					<div className="col-md-8 col-md-offset-2">

						<Saved saved={this.state.saved}/> 

					</div>

				</div>

			</div>
		)
		console.log("Im the end of Main.");
	}

});

// Export the component back for use in other files
module.exports = Main;