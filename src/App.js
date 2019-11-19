import React, { Component } from 'react'
import './App.css';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import SearchResultContainer from './containers/SearchResultContainer';
import MoviesContainer from './containers/MoviesContainer'
import TVShowsContainer from './containers/TVShowsContainer'
import SearchForm from './components/SearchForm';
import TabsContainer from './containers/TabsContainer';
import { searchContent } from './services/api'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className='App-title'>React Movies App</h1>
        </header>
        <TabsContainer />
      </div>
    )
  }
}

export default App;
