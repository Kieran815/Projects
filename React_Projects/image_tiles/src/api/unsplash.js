// `axios` is a promise-based http client for browsers and node.js. It will allow the app to make a request to `api.unsplash.com` and recieve a response.
import axios from "axios";

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 07d23dfa46097bb0f07d11e62d016f2661e7a4b7de42e1f6ba77c0b67f988c42'
	}
});
