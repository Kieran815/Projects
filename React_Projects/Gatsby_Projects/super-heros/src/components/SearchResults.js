import React from 'react';

class SearchResults extends React.Component {
  state = {
    loading: true,
    error: false,
    apiResults: []
  }

  componentDidMount() {

    const url = "https://superheroapi.com/api/10215225651027511/search/batman";
    fetch(url)
    .then(response => response.JSON())
    .then(charData => console.log(charData))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  }

  render() {
    return (
      <p>Search Results: </p>
    );
  }
}

export default SearchResults;
