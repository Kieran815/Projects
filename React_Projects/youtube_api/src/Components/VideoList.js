import React from "react";
import VideoItem from "./VideoItem";



const VideoList = ({ videos, onVideoSelect }) => {


	const resultsList = videos.map((video) => {
		return (
			<VideoItem
				key={video.id.videoId}
				video={video}
				onVideoSelect={onVideoSelect}
			/>
		);
	})

	return (
		<div className="ui link cards" style={{marginTop: "2vh"}}>
			{resultsList}
		</div>
	)
}

export default VideoList;
