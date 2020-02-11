import axios from "axios";

const KEY = "AIzaSyBYI7HN9u2-ixzodEkCdSwEEMxTtAt9weY";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 10,
		key: KEY
	}
});
