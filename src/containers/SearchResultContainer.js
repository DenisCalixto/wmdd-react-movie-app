import React, { Component } from 'react'

import Shows from '../components/Shows'

class SearchResultContainer extends Component {
  state = {
    search_results: null
  }

  updateSearchResults = (searchResults) => {
      //console.log("updateSearchResults")
    this.setState({
        search_results: searchResults
    })
  }

  render() {
      //console.log(this.state.search_results)
    const { search_results } = this.state;
    
    if (search_results) {
      if (search_results.length > 0) {
        return (
          <div>
            <Shows shows={search_results} />
          </div>
        );
      }
      else {
        return (
          <div>
            <p>No result found for the search query</p>
          </div>
        );
      }
    }
    else {
      return (
        <div>
          <p>Please initiate a search</p>
        </div>
      );
    }
  }
}

export default SearchResultContainer
