// Include React 
var React = require('react');

// This is the results component
var Results = React.createClass({

	// Here we render the function
	render: function(){
		console.log("Im the start of Results.");
		console.log(this.props.article);

		var articleList = this.props.article.map(function(article) {
							
							article.map(function(element) {
								return <p>{element}</p>
							})
							
						})
		// var articles = [];
		// for(var i = 0; i < this.props.article.length; i++) {
		// 	articles.push(<span className="article" key={i}>
		// 						this.props.article.headline.main + '\n'
		// 						this.props.article.web_url + '\n'
		// 						this.props.article.pub_date 
		// 					</span> +
		// 					<a href="#"><button>Save</button></a>)
		// }

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Results</h3>
				</div>
				<div className="panel-body text-center">
						<p>{articleList}</p>
				</div>
			</div>
		)
	console.log("Im the start of Results.");
	}
});

// Export the component back for use in other files
module.exports = Results;