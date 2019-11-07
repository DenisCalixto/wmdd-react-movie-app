import React, { Component } from 'react'
import { getMovies } from '../services/api'
import Movies from '../components/Movies'

class MoviesContainer extends Component {
  state = {
    movies: [],
    category: ""
  }

  constructor(props) {
    super(props);
    this.state = {category: props.category, movies:[]};
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

  render() {
    const { movies } = this.state
    return (
      <div>
          {/* send to the stateless component Movies the list of the recipes returned from the API  */}
        <Movies
          movies={movies}
        />
      </div>
    )
  }
}

export default MoviesContainer
