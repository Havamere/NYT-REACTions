// Include React 
var React = require('react');

// This is the form component. 
var Search = React.createClass({

	// Here we set a generic state associated with the text being searched for
	getInitialState: function(){
		return {
			query: "",
			startDate: "",
			endDate: ""
		}
	},

	// This function will respond to the user input 
	handleChange: function(event){

    	// Here we create syntax to capture any change in text to the query terms (pre-search).
    	// See this Stack Overflow answer for more details: 
    	// http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);

    	console.log(newState);

	},

	// When a user submits... 
	handleClick: function(){

		console.log("CLICK");
		console.log(this.state);
		
		// Set the parent to have the search term
		this.props.setParam(this.state);

	},

	// Here we render the function
	render: function(){
		console.log("Im the start of Search.");

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Search Parameters</h3>
				</div>
				<div className="panel-body text-center">

						<form>
							<div className="form-group">
								{/*Note how each has an onChange event associated with our handleChange event.*/}
								<h4 className=""><strong>Topic</strong></h4>
								<input type="text" className="form-control text-center" id="query" placeholder="Recent News" onChange= {this.handleChange} required/>
								<br />

								<h4 className=""><strong>Start Date</strong></h4>
								<input type="text" className="form-control text-center" id="startDate" placeholder="YYYYMMDD" onChange= {this.handleChange} required/>
								<br />

								<h4 className=""><strong>End Date</strong></h4>
								<input type="text" className="form-control text-center" id="endDate" placeholder="YYYYMMDD"  onChange= {this.handleChange} required/>
								<br />

								<button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
							</div>

						</form>
				</div>
			</div>
		)
	console.log("Im the end of Search.");
	}
});

// Export the component back for use in other files
module.exports = Search;