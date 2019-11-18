import React, { Component } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { getMovies } from '../services/api'
import Shows from '../components/Shows'

class MoviesContainer extends Component {
  state = {
    movies: [],
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
    getMovies(category).then(moviesResponse => {
      this.setState({
        movies: moviesResponse
      })
    })
  }

  handleChange = event => {
    this.setState({
      category: event.target.value
    })
    this.fetchData(event.target.value)
  };

  render() {
    const { movies } = this.state
    return (
      <div>
        <FormControl variant="outlined">
          <InputLabel shrink id="categoryLabelId">
            Category
          </InputLabel>
          <Select
            labelId="categoryLabelId"
            id="demo-simple-select-outlined"
            value={this.state.category}
            onChange={this.handleChange}
            className='combo'
          >
            <MenuItem value={'now_playing'}>now_playing</MenuItem>
            <MenuItem value={'popular'}>popular</MenuItem>
            <MenuItem value={'top_rated'}>top_rated</MenuItem>
            <MenuItem value={'upcoming'}>upcoming</MenuItem>
          </Select>
        </FormControl>
        {/* send to the stateless component Movies the list of the recipes returned from the API  */}
        <Shows shows={movies} />
      </div>
    );
  }
}

export default MoviesContainer
