import React from "react";
import axios from "axios";
import SeasonDisplay from './SeasonDisplay';
import './SeasonDisplay.css';
import Loader from './loader.js';
import LocationData from "./LocationData";
import WeatherCard from "./WeatherCard";
import "./App.css";

// This app focuses on `class`-based components in react and their additional capabilities, including an introduction to `state` and `props`.
/* `App` written as a `functional` component:
const App = () => {
	return (
		<div>
			<h1>Hi Kieran</h1>
			<SeasonDisplay />
		</div>
	);
};
*/
// React expects `class` components to have multiple methods attached to it, making it a better option for complex components. Extending `React.Component` imports several built-in methods to the new component and borrows functionality. `class` components can also access `state`.
/* ***Rules of `Class` Components:
	Must be a JavaScript class;
	Must `extend` (subclass) React.Component (imports built-in methods);
	Must Define a `render` method that will `return` some JSX (used for output onto windows);
*/
/* *** Component LifeCycle: Creation to Removal
	1. constructor
	2. render
	 	* content visible on screen; HAVE TO DEFINE
	3. componentDidMount
		* automatically called when component first shows up in app;
		Sit and wait for updates to data on page;
	4. componentDidUpdate
		* called automatically when component changes;
		sit and wait until component is no longer shown
	5. componentWillUnmount
*/
/* *** Component LifeCycle Methods
	Examples of when to use Lifecycle Methods:
		constructor(props) : good place for one-time setup and state initialization; avoid data loading, used `componentDidMount` instead;
		render() : avoid doing anything BESIDES returning JSX;
		componentDidMount() : initial data loading for components, outside processes (ex: current position, API requests, etc); only loads once, upon mount;
		componentDidUpdate: called EVERY TIME a component updates; data-loading when state/props change (network request, input changes, etc.);
		componentWillUnmount() : clean-up data;
		***Other LifeCycle Methods (not often used):
		shouldComponentUpdate()
		getDerivedStateFromProps()
		getSnapshotBeforeUpdate()
*/
/* *** Rules of `State`:
	Only usable with `class` components (unless using `hooks`, more later);
	Easily confused with `props` (more on `props` later);
	`state` is a JavaScript object that contains data relevant to a component;
	Updating `state` on a component causes the component to instantly re-render;
	`state` must be initialized when a component is created;
	`state` can only be updated using the function `setState()`;
*/

// console.log(process.env.REACT_APP_WEATHER_API_KEY);
//
// console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

// `App` written as `class`- based component:
class App extends React.Component {
	// `constructor()` from JS. `constructor` is called any time an instance of a class is created. used in React to set initial `state`.
	// `constructor` is not required unless building additional setup for app.
	constructor(props) {
		super(props); // `super` used to set initial `state` in React
		// `state` is created inside a JS object (`{...}`)
		// create `this.state` to track `state` across the app.
		// direct assignment to `state` in ONLY done when INITIALIZING `state`;
		this.state = {
			lat: null,
			long: null,
			mapData: [],
			weatherForecast: [],
			errorMessage: null
		}
		/* Can also set initial state in a single line, w/o having to use constructor method:
		state = { lat: null, long: null, errorMessage: null };
		*/
	}

	async componentDidMount() {
		// use built-in browser function to get `geolocation` for user
		// this was initially built into the `constructor` so that when the class is created, it will immediately begin working on requesting the data (in this case from the browser), but was moved into `componentDidMount()`, as it is a better lifeCycle method to use for initial data loading.
		await window.navigator.geolocation.getCurrentPosition(
			(position) => {
				// called `setState` to update `lat` and `long`
				this.setState({ lat: position.coords.latitude });
				this.setState({ long: position.coords.longitude });
			},
			// make sure to `console.log(error)` any time any errors may pop up in your code (easier debugging)
			(error) => this.setState({ errorMessage: error.message })
		);

		await axios.get("http://api.weatherapi.com/v1/forecast.json", {
			params: {
				key: "48f162a78e4f4a62865190945190412",
				days: 5,
				q: {
					lat: `${this.state.lat}`,
					lon: `${this.state.long}`
				}
			}
		})
			.then(res => {
				console.log(res);
				this.setState({ weatherForecast: res.data.forecast.forecastday });
			});


// API retrieved via `fetch`
		// const response = await fetch("http://api.weatherapi.com/v1/forecast.json?key=48f162a78e4f4a62865190945190412&q=chicago&days=5")
		// // convert results to JSON
		// const data = await response.json();
		// this.setState({ weatherForecast: data.forecast.forecastday });
	}

	// componentDidUpdate() {
	// 	console.log('Component Updated')
	// }
	// componentWillUnmount() {
	// 	console.log('Component Unmounted')
	// }

	renderContent() {
		// `if` statements are helpful for Conditional Rendering...
		if(this.state.errorMessage || !this.state.lat) {
			return <h2>Error: {this.state.errorMessage}</h2>;
		} else if (!this.state.errorMessage && this.state.lat) {
			return (
				// `state` can be passed down to children components as `props`
					<div id="container">
						<SeasonDisplay
							lat={this.state.lat}
							long={this.state.long}
						/>
						<div id="localForecast">
							<div id="locationData">
								<LocationData
									lat={this.state.lat}
									long={this.state.long}
								/>
							</div>
							<div id="weatherCards">
								<WeatherCard
									weatherForecast={this.state.weatherForecast}
								/>
							</div>
						</div>
					</div>
			);
		}
		return (
			<div>
				<Loader message="Waiting on You..." />
			</div>
		)
	};

	render() {
		return (
			<div id="container">
				{this.renderContent()}
			</div>
		)
	}
}

export default App;
