import React, { Component } from 'react'

// import { makeStyles } from '@material-ui/core/styles';

import SearchResults from '../components/SearchResults'

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

class SearchResultContainer extends Component {
  state = {
    search_results: null
  }

//   constructor(props) {
//     super(props)
//     console.log(props)
//     console.log(props.search_results)
//     if (props.search_results) {
//         console.log('constructor')
//         this.state.search_results = props.search_results
//     }
//   }

//   componentDidMount() {
//     console.log('componentDidMount')
//   }

//   fetchData = (category) => {
//     getTVShows(category).then(tvShowsResponse => {
//       this.setState({
//         tv_shows: tvShowsResponse
//       })
//     })
//   }

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
            <SearchResults search_results={search_results} />
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
