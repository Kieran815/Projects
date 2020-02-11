import React from "react";

export default class SearchBar extends React.Component {

	state = {searchTerm: ""};

	videos = this.props.videos;

	onInputChange = event => {
		this.setState({ searchTerm: event.target.value })
	};

	onFormSubmit = event => {
		event.preventDefault();
		this.props.onSearchTermSubmit(this.state.searchTerm);
	};

	render() {
		return (
			<React.Fragment>
				<div className="search_bar ui segment">
					<form onSubmit={this.onFormSubmit} className="ui form">
						<div className="field">
							<label>Search Videos: </label>
							{/* turn input into controlled element by passing state through react, storing data inside component instead of inside DOM */}
							<input
								type="text"
								value={this.state.searchTerm}
								onChange={this.onInputChange}
							/>
						<p>{this.props.resultCount}</p>
						{/* <p>{this.resultCount}</p> */}
						</div>
					</form>
				</div>
			</React.Fragment>

		);
	}
}
