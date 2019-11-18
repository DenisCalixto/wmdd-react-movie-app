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

const TVShows = (props) => {
  const classes = getStyles()
  //Grid is a Material UI class
  return (
    <div className='container'>
      <Grid container className={classes.root} spacing={5}>
        {props.tv_shows.map(tv_show => {
          const { id, name, first_air_date, popularity, overview, poster_path } = tv_show
          return (
            <Grid item xs={12}>
              <ShowCard
                key={id}
                id={id}
                title={name}
                release_date={first_air_date}
                popularity={popularity}
                overview={overview}
                poster_path={POSTER_IMAGE_BASE_URL + poster_path}
              />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default TVShows
