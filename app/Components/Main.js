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
			search: "",
			results: "",
			saved: []
		}
	},	

	// This function allows childrens to update the parent.
	setParam: function(parameter){
		this.setState({
			search: parameter
		})
	},



	// Here we render the function
	render: function(){

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
				
						<Results article={this.state.results} />

					</div>

				</div>

				<div className="row">

					<div className="col-md-8 col-md-offset-2">

						<Saved saved={this.state.saved}/> 

					</div>

				</div>

			</div>
		)
	}

});
