import React, { Component } from 'react'

import Shows from '../components/Shows'

class SearchResultContainer extends Component {
  state = {
    search_results: null,
    message: "Please enter a search"
  }

  updateSearchResults = (searchResults) => {
      //console.log("updateSearchResults")
    this.setState({
        search_results: searchResults
    })
  }

  resetResultsMessage = () => {
    this.setState({
      message: "Please enter a search"
    })
    //this.message = "Please enter a search"
  }

  showInTypingMessage = () => {
    this.setState({
      message: "Please initiate a search"
    })
    //this.message = "Please initiate a search"
  }

  render() {
      //console.log(this.state.search_results)
    const { search_results, message } = this.state;
    
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
          <p>{message}</p>
        </div>
      );
    }
  }
}

export default SearchResultContainer
