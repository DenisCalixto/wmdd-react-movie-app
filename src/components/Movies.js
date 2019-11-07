import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'
import MovieCard from './MovieCard'

const getStyles = makeStyles(theme => ({
  root: {
    margin: '5em 0'
  }
}))

const Movies = (props) => {
  const classes = getStyles()
  //Grid is a Material UI class
  return (
    <div className='container'>
      <Grid container className={classes.root} spacing={5}>
        {props.movies.map(movie => {
          const { id, title, release_date, poster_path } = movie
          return (
            <Grid item xs={3}>
              <MovieCard
                key={id}
                id={id}
                title={title}
                poster_path={poster_path}
                release_date={release_date}
              />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Movies
