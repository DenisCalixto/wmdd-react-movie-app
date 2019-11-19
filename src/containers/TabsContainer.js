import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import SearchResultContainer from '../containers/SearchResultContainer';
import ShowsContainer from '../containers/ShowsContainer'
import SearchForm from '../components/SearchForm';
import { TabPanel, a11yProps } from '../components/TabPanel';
import { searchContent } from '../services/api'

import { MOVIES_URL, TV_SHOWS_URL } from '../config/api_config'

class TabsContainer extends Component {
  state = {
    search_results: [],
    value: 0,
  }
  search_category = "movie"
  searchText = ""

  constructor(props) {
     super(props);
     this.searchResultRef = React.createRef()
  }

  handleChange = (event, value) => {
    this.setState( (state) => ({value}));
  };

  handleSearch = () => {
    // console.log(this.category)
    // console.log(this.searchText)
    if (this.searchText !== "") {
      searchContent(this.search_category, this.searchText).then(searchResponse => {
        //console.log(searchResponse)
        this.setState({
          search_results: searchResponse
        })
        // console.log(this.state.search_results)
        this.searchResultRef.current.updateSearchResults(this.state.search_results)
        this.setState({
          value: 1
        })
      })
    }
  }

  handleSearchText = (key, value) => {
    this.searchText = value
    if (this.searchText !== "")
      this.searchResultRef.current.showInTypingMessage()
    else
      this.searchResultRef.current.resetResultsMessage()
  }
  
  handleCategoryChange = (key, value) => {
    this.search_category = value
  }

  render() {
    return (
      <div>
        <SearchForm
          onInputChange={this.handleSearchText}
          onChangeCategory={this.handleCategoryChange}
          onSearch={this.handleSearch}
          category={this.search_category}
        />
        <div className='tab-container'>
          <AppBar position="static">
          <Tabs value={this.state.value} 
            onChange={this.handleChange} 
            variant="fullWidth"
            centered
            aria-label="simple tabs example">
            <Tab label="MOVIES" {...a11yProps(0)} />
            <Tab label="SEARCH RESULTS" {...a11yProps(1)} />
            <Tab label="TV SHOWS" {...a11yProps(2)} />
          </Tabs>
          </AppBar>
          <TabPanel value={this.state.value} index={0}>
          <ShowsContainer 
            category={"now_playing"} 
            api_url={MOVIES_URL} 
            categories={['now_playing', 'popular', 'top_rated', 'upcoming']} />
          </TabPanel>
          <TabPanel value={this.state.value} index={1}>
          <SearchResultContainer 
            ref={this.searchResultRef} 
            shows={this.state.search_results}
          />
          </TabPanel>
          <TabPanel value={this.state.value} index={2}>
          <ShowsContainer 
            category={"airing_today"} 
            api_url={TV_SHOWS_URL} 
            categories={['airing_today', 'on_the_air', 'popular', 'top_rated']} />
          </TabPanel>
        </div>
      </div>
    )
  }
}

export default TabsContainer;
