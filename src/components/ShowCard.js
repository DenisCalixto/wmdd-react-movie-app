import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles'
import { CardContent } from '@material-ui/core'

const getStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  media: {
    height: '450px',
    width: '300px',
  },
  content: {
    flexBasis: '70%',
  },
  title: {
    fontWeight: '600',
  },
  subtitle: {
    fontWeight: '500',
  }
}))

const ShowCard = props => {
  const classes = getStyles()
  const { id, title, release_date, popularity, overview, poster_path } = props
  // Card, CardHeader and CardMedia are Material UI classes
  return (
    <Card key={id} className={classes.card}>
      <CardMedia
        alt={title}
        component='img'
        className={classes.media}
        image={poster_path}
        title={title}
      />
      <CardContent title={title} className={classes.content}>
        <Typography variant="h5" color="textSecondary" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p" className={classes.subtitle}>
          Release Date: {release_date} | Popularity: {popularity}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {overview}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ShowCard
