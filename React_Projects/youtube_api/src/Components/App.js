import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import YouTube from "../api/youtube_api";
import VideoDetail from "./VideoDetail";
import "./App.css";

class App extends React.Component {
	state = {
		videos: [] ,
		selectedVideo: null
	};

	componentDidMount() {
		this.onSearchTermSubmit("How to Use YouTube: App Tutorial");
	}

	onSearchTermSubmit = async searchTerm => {
		const response = await YouTube.get("/search", {
			params: {
				q: searchTerm
			}
		});
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	};

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	}

	render() {
		return (
			<div className="ui container">
				<h3>YouTube API</h3>
				<SearchBar
					onSearchTermSubmit={this.onSearchTermSubmit}
					videos={this.state.videos}
				/>
			<div className="ui grid">
				<div className="ui row">
					<div>
						<VideoDetail
							video={this.state.selectedVideo}
						/>
					</div>
					<div>
						<VideoList
							videos={this.state.videos}
							onVideoSelect={this.onVideoSelect}
						/>
					</div>
				</div>
			</div>

			</div>
		);
	}
}

export default App;
