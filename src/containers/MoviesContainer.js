import React, { Component } from 'react'

import { MOVIES } from '../config/api_config'
import { getMovies } from '../services/api'

import Movies from '../components/Movies'

class MoviesContainer extends Component {
  state = {
    recipes: MOVIES,
    recipe: ""
  }

  // componentDidMount() {
  //   const { recipe } = this.state
  //   this.fetchData(recipe)
  // }

  // fetchData = (title) => {
  //   getRecipe(title).then(recipe => {
  //     this.setState({
  //       recipe: recipe
  //     })
  //   })
  // }

  fetchData = (recipeName) => {
        //with the name of the recipe being searched, fetch data from the API    
        getMovies(recipeName).then(recipes => {
            //updating the recipes state attribute of MoviesContainer component
            this.setState({
                recipes: recipes
            })
        })
  }

  render() {
    const { recipes } = this.state
    return (
      <div>
          {/* send to the stateless component Movies the list of the recipes returned from the API  */}
        <Movies
          recipes={recipes}
        />
      </div>
    )
  }
}

export default MoviesContainer
