import React, { Component } from 'react'
import './App.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import SearchResultContainer from './containers/SearchResultContainer';
import MoviesContainer from './containers/MoviesContainer'
import TVShowsContainer from './containers/TVShowsContainer'
import SearchForm from './components/SearchForm';
import { searchContent } from './services/api'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

class App extends Component {
  state = {
    search_results: [],
    value: 0,
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

  handleChange = (event, value) => {
    this.setState( (state) => ({value}));
  };

  handleSearch = () => {
    // console.log(this.category)
    // console.log(this.searchText)
    searchContent(this.category, this.searchText).then(searchResponse => {
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
          category={"movie"}
        />
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
          <MoviesContainer category={"now_playing"} />
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          <SearchResultContainer 
            ref={this.searchResultRef} 
            search_results={this.state.search_results}
          />
        </TabPanel>
        <TabPanel value={this.state.value} index={2}>
          <TVShowsContainer category={"top_rated"} />
        </TabPanel>
      </div>
    )
  }
}

export default App;
