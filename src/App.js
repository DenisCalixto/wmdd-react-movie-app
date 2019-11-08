import React, { Component } from 'react'
import './App.css';
import MoviesContainer from './containers/MoviesContainer'
import TVShowsContainer from './containers/TVShowsContainer'
import SearchForm from './components/SearchForm';

import { searchContent } from './services/api'

class App extends Component {
  state = {
    search_results: [],
  }
  category = ""
  searchText = ""

  handleSearch = () => {
    console.log(this.category)
    console.log(this.searchText)
    searchContent(this.category, this.searchText).then(searchResponse => {
      console.log(searchResponse)
      this.setState({
        search_results: searchResponse
      })
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
        <MoviesContainer category={"now_playing"} />
        <TVShowsContainer category={"top_rated"} />
      </div>
    )
  }
}

export default App;
