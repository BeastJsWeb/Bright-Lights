/*<Stack  overflow='hidden' mt='calc(0.5em + 6.7vw)' >
      <Stack direction='row'
     spacing={4} 
     overflow='auto'
     width='300%'
     > 
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
    </Stack>
    </Stack>*/