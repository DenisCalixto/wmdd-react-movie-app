import React, { Component } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { getMovies } from '../services/api'
import Movies from '../components/Movies'

class MoviesContainer extends Component {
  state = {
    movies: [],
    category: ""
  }

  constructor(props) {
    super(props);
    this.state.category = props.category;
  }

  useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    inputLabel: {
      color: 'red',
      backgroundColor: 'white',
    },
  }));

  componentDidMount() {
    const { category } = this.state
    this.fetchData(category)
  }

  componentWillMount() {
    console.log('categories: ' + this.category)
  }

  fetchData = (category) => {
    getMovies(category).then(moviesResponse => {
      this.setState({
        movies: moviesResponse
      })
    })
  }

  handleChange = event => {
    this.state.category = event.target.value
    this.fetchData(event.target.value)
  };

  render() {
    const { movies } = this.state
    return (
      <div>
        <FormControl variant="outlined">
          <InputLabel 
            shrink id="categoryLabelId"
            className={this.useStyles.inputLabel}>
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
        <Movies movies={movies} />
      </div>
    );
  }
}

export default MoviesContainer
