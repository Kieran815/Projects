import React from 'react';
import { Paper, TextField } from '@material-ui/core';


// created as `class`-based component because it will manage state
class SearchBar extends React.Component {

	state = {
		searchTerm: '',
	}

	// use ARROW FUNCTIONS => to bind methods directly to the class w/o having to use a bind statement
	// handle change accepts value from event (`onSubmit` from the `<form>` element)
	// `this.setState` updates state for component. Call it like a function and input an Object, usually one from the `state` object at top
	handleChange = (event) => this.setState({ searchTerm: event.target.value });




	handleSubmit = (event) => {
		const { searchTerm } = this.state;
		const { onFormSubmit } = this.props;

		onFormSubmit(searchTerm);

		event.preventDefault();
	}

	// `onSubmit` event triggers `handleSubmit` method
	// `onChange` handles state changes and sends updated info
	render() {
		return (
			<Paper elevation={24} style={{ padding: '5px'}}>

				<form onSubmit={this.handleSubmit}>

					<TextField fullWidth label="Type to Search..." onChange={this.handleChange} />
				</form>
			</Paper>
		)
	}
}


export default SearchBar;
