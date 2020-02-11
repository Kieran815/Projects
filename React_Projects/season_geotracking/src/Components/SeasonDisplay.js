import React from 'react';
import './SeasonDisplay.css';

// created configuration object (`seasonTheme`) to make objects with `text` and `iconName` options to plug directly into the `return` statement based on what renders from the results of the `season` variable.
const seasonTheme = {
	Spring: {
		text: "Mother Earth has Awoken",
		iconName: 'umbrella'
	},
	Summer: {
		text: "Surf's Up, Son!!!",
		iconName: 'sun'
	},
	Fall: {
		text: "It's Fall, Bitches!!!",
		iconName: 'leaf'
	},
	Winter: {
		text: "Cuz I'm... Cold-Blooooded!!!",
		iconName: 'snowflake'
	},
	error: {
		text: "Wait...What Happened???",
		icon: 'question circle'
	}
};

// more `if` statements for conditional rendering
const getSeason = (lat, month) => {
	if (lat > 0) {
		if(month > 1 && month < 5) {
			return "Spring";
		} else if (month > 4 && month < 8) {
			return "Summer";
		} else if (month > 7 && month < 10) {
			return "Fall";
		} else if (month > 2 || month < 9) {
			return "Winter";
		} else {
			return "error";
		}
	} else if (lat < 0) {
		if(month > 1 && month < 5) {
			return "fall";
		} else if (month > 4 && month < 8) {
			return "winter";
		} else if (month > 7 && month < 10) {
			return "spring";
		} else if (month > 2 || month < 9) {
			return "summer";
		} else {
			return "error";
		}
	}
}

const SeasonDisplay = props => {
	// select and save results of `getSeason` statement
	const season = getSeason(props.lat, new Date().getMonth());
	// `text` and `iconName` destructrued from `seasonConfig`, then placed directly into the `return` statement based on `season` variable
	const { text, iconName } = seasonTheme[season];

	return (
		<div className='season-display container'>
			<div className={`season-display ${season}`}>
				<i className={`icon-left huge ${iconName} icon`} />
				<h1 className='seasonText'>{season}</h1>
				<h2 className='seasonText'>{text}</h2>
				<i className={`icon-right huge ${iconName} icon`} />
			</div>
		</div>
	);
};

export default SeasonDisplay;
