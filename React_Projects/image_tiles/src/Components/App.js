import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


// `App.js` created in new	`Components` folder instead of `index.js`. When working with larger applications, it is a best practice to place all of the components into one folder.
class App extends React.Component {

	state = {
		images: []
	};

	// *** API Requests!!! ***
	/* *** API Request Flow:
		`App` renders one time w/o list of images.
		`onSearchSubmit` method called.
		Request made to `unsplash`/ `Axios`.
				...wait
		Request Completed, data retreived.
		Set image data state of `App` component.
		`App` component re-renders and shows images.
	*/
	// use `axios` to send a `get` request to `unsplash`
	// pass `params` for your query to the api. `onSearchSubmit` is passed down as `onEnter` to `SearchBar`. When the `input` field is submitted, the `state.term` value from `SearchBar` is passed back up to `App` via the `onSearchSubmit` as the 'term' value;
	// the `headers` object contains the access key to make requests to the `unsplash` api via `unsplash.js`.
	// callback for `onSearchSubmit` is set as arrow function so it will bind to `onEnter`, allowing it to call the term set in `onEnter` back to the `onSearchSubmit` function as a variable.

	onSearchSubmit = async term => {
		const response = await unsplash.get('/search/photos', {
			params: { query: term },
		});
		this.setState({ images: response.data.results });
	};

	

	render() {
		return(
		<div className="ui container" style={{ marginTop: "10px", color: "rgb(29, 238, 18)" }}>
			<h1>Image Tiles!!!</h1>
			{/* `props` passed down can have any name you choose */}
			<SearchBar
				onEnter={this.onSearchSubmit}
				count={this.searchResultsCount}
				images={this.state.images}
			/>
		<br />
			<ImageList images={this.state.images} />
		</div>
		);
	}
}

export default App;
