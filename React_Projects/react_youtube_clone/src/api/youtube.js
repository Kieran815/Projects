import axios from 'axios';


// site api is pulled from...
	// paramaters for api...
		// `part` adds add'l instructions to end of URL
		// limit max results to...
		// actual key for api.

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3'
});
