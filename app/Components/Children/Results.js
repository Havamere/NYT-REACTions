// Include React 
var React = require('react');

// This is the results component
var Results = React.createClass({

	// Here we render the function
	render: function(){
		console.log("Im the start of Results.");
		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Results</h3>
				</div>
				<div className="panel-body text-center">

						<p>{this.props.article}
							<a href="#"><button>Save</button></a>
						</p>

				</div>
			</div>
		)
	console.log("Im the start of Results.");
	}
});

// Export the component back for use in other files
module.exports = Results;