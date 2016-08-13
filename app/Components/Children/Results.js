// Include React 
var React = require('react');

// This is the results component
var Results = React.createClass({

	// Here we render the function
	render: function(){
		console.log("Im the start of Results.");
		console.log(this.props.article);

		var articleList = function(articleSet) {
							for (var i = 0; i < articleSet.length; i++) {
								for (var j = 0; j < i.length; j++) {
									return j + "\n");
								}
								html.appendChild("<a href='#'><button>Save this article</button></a>");
							}
						}

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Results</h3>
				</div>
				<div className="panel-body text-center">
						<p>{articleList(this.props.article)}</p>
				</div>
			</div>
		)
	console.log("Im the start of Results.");
	}
});

// Export the component back for use in other files
module.exports = Results;