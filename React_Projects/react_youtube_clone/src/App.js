// use import statements to pull libraries and components into the main app, also used to pull components into other components
import React from 'react';

// `{ curley braces }` means that the { element } is NOT the default export for the library. i.e., { Grid } is an export from the @material-ui/core, but not the default export
import { Grid } from '@material-ui/core';

import { borders } from '@material-ui/system';

// import created components from the `components` folder. Note use of { curley braces }, as `components` has no default export. Created `./components/index.js` to track exports and import all modular components one one line
import { SearchBar, VideoDetail, VideoList } from './components';

// no `{curley braces }` means that the component only has one main export, or default export;
import youtube from './api/youtube.js';

import './App.css';

// created `App` class to contain entire app, which is then sent to `root` div on `index.html`
class App extends React.Component {

	// set initial state to pass down to components
	state = {
		videos: [],
		selectedVideos: null
	}

	// life-cycle event that runs upon rendering of page, sets action with `handleSubmit` to search term on page load
	componentDidMount() {
		this.handleSubmit('JavaScript');
	}


	// loads selected video and plays in on page. Passed down to VideoList, then again to video Item
	onVideoSelect = (video) => {
		this.setState({selectedVideo: video})
	}

	// sets up api (youtube) search paramaters and request new information on submit. Passed Down to `SearchBar`.
	handleSubmit = async (searchTerm) => {
		const response = await youtube.get('search', {
			params: {
				part: 'snippet',
				maxResults: 5,
				key: 'AIzaSyDvHg1A_Pf-cRx21thhdfmzC3SPQwg-uEw',
				q: searchTerm,
			}
		});
		// sets received videos to `videos` array, sets `selectedVideo` state to first video in array
		this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
	}



	render() {
		const { selectedVideo, videos } = this.state;

		const defaultProps = {
		  bgcolor: 'background.paper',
		  m: 1,
		  style: { width: '5rem', height: '5rem' },
		  borderColor: 'text.primary',
		};

		return (
			<Grid justify="center" container spacing={10}>
				<Grid item xs={10}>
					<Grid container spacing={8} borderRadius='50%'>
					<h1 id='title'>Kieran's YouTube API</h1>
						<Grid item xs={12} border={1}>
							<SearchBar onFormSubmit={this.handleSubmit} />
						</Grid>
						<Grid item xs={6}>
							<VideoDetail video={ selectedVideo }/>
						</Grid>
						<Grid item xs={2}>
							<VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		)
	}
}

export default App;
