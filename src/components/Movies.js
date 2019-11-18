import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'
import { POSTER_IMAGE_BASE_URL } from '../config/api_config'

import ShowCard from './ShowCard'

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
          const { id, title, release_date, popularity, overview, poster_path } = movie
          return (
            <Grid item xs={12}>
              <ShowCard
                key={id}
                id={id}
                title={title}
                popularity={popularity}
                overview={overview}
                poster_path={POSTER_IMAGE_BASE_URL + poster_path}
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
