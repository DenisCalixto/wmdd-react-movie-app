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

const Shows = (props) => {
  const classes = getStyles()
  //Grid is a Material UI class
  return (
    <div className='container'>
      <Grid container className={classes.root} spacing={5}>
        {props.shows.map(show => {
          const { id, title, date, popularity, overview, poster } = show
          return (
            <Grid item xs={12}>
              <ShowCard
                key={id}
                id={id}
                title={title}
                popularity={popularity}
                overview={overview}
                poster_path={POSTER_IMAGE_BASE_URL + poster}
                release_date={date}
              />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Shows
