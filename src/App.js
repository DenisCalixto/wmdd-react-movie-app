import React, { Component } from 'react'
import './App.css';
import MoviesContainer from './containers/MoviesContainer'
import TVShowsContainer from './containers/TVShowsContainer'
import SearchForm from './components/SearchForm';
import SearchResultContainer from './containers/SearchResultContainer';

import { searchContent } from './services/api'

class App extends Component {
  state = {
    search_results: [],
  }
  category = ""
  searchText = ""

  constructor(props) {
     super(props);
    //  this.state = {
    //    search_results: []
    //  }
     this.searchResultRef = React.createRef()
  }

  handleSearch = () => {
    // console.log(this.category)
    // console.log(this.searchText)
    searchContent(this.category, this.searchText).then(searchResponse => {
      this.setState({
        search_results: searchResponse
      })
      // console.log(this.state.search_results)
      this.searchResultRef.current.updateSearchResults(this.state.search_results)
    })
  }

  handleSearchText = (key, value) => {
    // this.setState({
    //   [key]: value
    // })
    this.searchText = value
  }
  
  handleCategoryChange = (key, value) => {
    // this.setState({
      //   [key]: value
      // })
    this.category = value
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className='App-title'>React Movies App</h1>
        </header>
        <SearchForm
          onInputChange={this.handleSearchText}
          onChangeCategory={this.handleCategoryChange}
          onSearch={this.handleSearch}
        />
        <SearchResultContainer 
          ref={this.searchResultRef} 
          search_results={this.state.search_results} 
        />
        <MoviesContainer category={"now_playing"} />
        <TVShowsContainer category={"top_rated"} />
      </div>
    )
  }
}

export default App;
