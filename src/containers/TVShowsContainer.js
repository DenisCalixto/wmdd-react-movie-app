import React, { Component } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { getTVShows } from '../services/api'
import TVShows from '../components/TVShows'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

class TVShowsContainer extends Component {
  state = {
    tv_shows: [],
    category: ""
  }

  constructor(props) {
    super(props);
    this.state.category = props.category;
  }

  componentDidMount() {
    const { category } = this.state
    this.fetchData(category)
  }

  fetchData = (category) => {
    getTVShows(category).then(tvShowsResponse => {
      this.setState({
        tv_shows: tvShowsResponse
      })
    })
  }

  handleChange = event => {
    this.fetchData(event.target.value)
  };

  render() {
    const { tv_shows } = this.state
    return (
      <div>
        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={this.state.category}
            onChange={this.handleChange}
          >
            <MenuItem value={'airing_today'}>airing_today</MenuItem>
            <MenuItem value={'on_the_air'}>on_the_air</MenuItem>
            <MenuItem value={'popular'}>popular</MenuItem>
            <MenuItem value={'top_rated'}>top_rated</MenuItem>
          </Select>
        </FormControl>
        {/* send to the stateless component Movies the list of the recipes returned from the API  */}
        <TVShows tv_shows={tv_shows} />
      </div>
    );
  }
}

export default TVShowsContainer
