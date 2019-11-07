import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/styles'
import { CardContent } from '@material-ui/core'

const getStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%'
  }
}))

const TVShowCard = props => {
  const classes = getStyles()
  const { id, title, release_date, popularity, overview, poster_path } = props
  // Card, CardHeader and CardMedia are Material UI classes
  return (
    <Card key={id}>
      <CardHeader
        title={title}
        subheader={release_date}
      />
      <CardContent 
        title={id}
        subheader={poster_path}
      />
      <CardMedia
        className={classes.media}
        image={poster_path}
        title={title}
      />
    </Card>
  )
}

export default TVShowCard
