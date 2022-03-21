import { Card, CardActionArea, Stack, CardMedia, CardContent, Typography, Button, CardActions } from "@mui/material"
import React from "react"
import Carousel from "react-material-ui-carousel"
import group501 from '../../images/group5/01.png'
import group502 from '../../images/group5/02.png'
import group503 from '../../images/group5/03.png'

const toursData = [
  { 
    location: 'Chandler, AZ', 
    place: 'The Park at Wild Horse Pass',
    date: 'Apr 02 2021',
    image: group501
  },

  { 
    location: 'Ibiza, IBZ', 
    place: 'Swag Ibiza Club',
    date: 'Jul 08 2021',
    image: group502
  },

  { 
    location: 'Ibiza, IBZ', 
    place: 'El Swing Ibiza',
    date: 'Jul 10 2021',
    image: group503
  }
]

const Tours = () => {
  return (
    <Carousel 
    sx={{
      justifyContent: 'center'
    }} >
      {toursData.map(tour => (
        <Card sx={{ maxWidth: 'calc(5em + 14vw)' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="280vw"
              image={tour.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {tour.place}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {tour.data}
              </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
        </CardActions>
      </Card>
      ))}
    </Carousel>
  )
}

export default Tours