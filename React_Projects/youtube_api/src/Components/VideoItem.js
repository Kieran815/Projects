import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
	// `snippet` destructured from `video` item
	const { snippet } = video;

	// Callback for `onVideoSelect` is sent from the parent (`App`) component down three levels to `VideoItem`. When a video item is selected, the info is sent back up to the `App` component and updated in the parent `state`
	return (
		<div onClick={() => onVideoSelect(video)} className="card">
	    <div className="image">
	      <img
					src={snippet.thumbnails.medium.url}
					alt={snippet.description}
				/>
	    </div>
	    <div className="content">
	      <div className="header"><b>{snippet.title}</b></div>
	      <div className="description">{snippet.description}</div>
	    </div>
		</div>
	);
}

export default VideoItem;
