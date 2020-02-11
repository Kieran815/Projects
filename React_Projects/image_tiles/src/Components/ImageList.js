import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = (props) => {

	const images = props.images.map((image) => {
		console.log(image);
		return <ImageCard image={image} key={image.id} />;
	});

	return (<div className="ui grid container" id="imgContainer">{images}</div>);
};

export default ImageList;
