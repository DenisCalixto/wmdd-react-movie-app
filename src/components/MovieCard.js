import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/styles'

const getStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%'
  }
}))

const MovieCard = props => {
  const classes = getStyles()
  const { id, title, imageUrl, publisher } = props
  // Card, CardHeader and CardMedia are Material UI classes
  return (
    <Card key={id}>
      <CardHeader
        title={title}
        subheader={publisher}
      />
      <CardMedia
        className={classes.media}
        image={imageUrl}
        title={title}
      />
    </Card>
  )
}

export default MovieCard
