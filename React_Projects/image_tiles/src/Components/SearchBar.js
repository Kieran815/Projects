import React from "react";

class SearchBar extends React.Component {
	/* Controlled Vs UnControlled Elements:
		Controlled Components make it so that any saved or processed data is controlled by `state` or run through react as the source of truth. One of the advantages to this is that manipulating items in `state` becomes easier, i.e. text `toUpperCase`
		UnControlled Components save the info in the `DOM` as opposed to in react in the `state` object.
	*/

	/* *** `SearchBar` Component Flow ***
		* User Types in Input
			-`value` from text passed to `onChange` in `input`
		* Callback (`onChange`) Gets Invoked
			- `onChange` begins running when `input` is changed
		* Calls `setState` with the new `value`
			-  `state` is updated via `term: event.targed.value`
		* Component Re-Renders
			- `state.term` gets overwritten as more text is typed
		* `input` is told what the value is (coming from `state`)
			-
	*/

	state = { term: "" };

	// called any time something is typed into the `SearchBar` input box
	// Community Convention for event handlers is to name them after `what and when` the handler is looking for, so that it is easier to identify what the handler function is supposed to do. In this case, `what` is the `input` box and `when` is `onChange` (there are others like in JS, `onClick`, `onSubmit`, etc.)
	// `console.log` to see keydown events; this method is not used.
	onInputChange(event) {
		console.log("Input Changed");
	}
	// `console.log` to see keydown events; this method is not used.
	onInputClick() {
		console.log("Input Clicked");
	}
	// `console.log` to see keydown events; this method is not used.
	buttonClick() {
		console.log("Button Clicked");
	}

	// arrow functions `() => {}` will automatically bind methods
	// `event.preventDefault()` prevents the default event from happening. in this case, when a user presses `Enter` after typing in a search term, it prevents the page from re-rendering.
	onFormSubmit = event => {
		event.preventDefault(this.props.images);
		this.props.onEnter(this.state.term);
	};

	/*methods passed to event handlers do not need the `()` added to call them, else it will call the function on component render instead of when an event happens */
	/* Whatever is typed in `value` is what will show in `input` box, so `this.state.term` renders what the user is typing from the `state` object as opposed to the `DOM` */
	/* `onChange` is called any time something is typed into the `SearchBar` input box. It updates `state.term` from the current `value` */


	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Enter Search Terms:</label>
						<input
							type="text"
							onChange={ event => this.setState({ term: event.target.value })}
							value={this.state.term}
							onClick={this.onInputClick}
						/>
					<button onClick={this.buttonClick}>Search</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
