import React from "react";
import { Card, Image } from 'semantic-ui-react';

/*	*** ImageCard Flow:
	Let `ImageCard` render itself and it's image;
	Reach into DOM and get `height` of `image`;
	Set `image.height` on `state` to get `ImageCard` to re-renders
		While re-rendering, assign 'grid-row-end' to make image take up appropriate space.
*/

/* *** React Refs:
	Gives access to single DOM element;
	Create `refs` in `constructor`, assign them to instance variables, then pass to JSX element as `props`.
*/

class ImageCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = { spans: 0}

		this.imageRef = React.createRef();
	}
/*
	componentDidMount() {
		console.log(this.imageRef);
		this.imageRef.current.addEventListener('load', this.setSpan);
	}

	setSpan = () => {
		const height = this.imageRef.current.height;
		const spans = Math.ceil(height / 10);
		this.setState({ spans })
	}
*/
	render() {
		// you can destructure property elements directly out of an object to make coding easier:
		const { description, urls, alt_description, user } = this.props.image;

		return (
			<div>
			  <Card>
			    <Image src={urls.thumb} />
			    <Card.Content>
			      <Card.Header>{alt_description}</Card.Header>
			      <Card.Meta>
			        <span className='userName'>{user.name}</span>
			      </Card.Meta>
			      <Card.Description>
			        {description}
			      </Card.Description>
			    </Card.Content>
			  </Card>
				<br />
			</div>
		);
	}
}

export default ImageCard;
