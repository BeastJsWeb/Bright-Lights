import React from "react";
import { CardMedia, Typography, Grid, CardActionArea } from '@mui/material';

const NewsPost =({image, title, title2}) => {
  return (
    <Grid item
    lg={1} md={1} xs={1}
    >
      <CardActionArea 
      sx={{
        borderTopLeftRadius: '1.5em 1.5em',
        borderBottomRightRadius: '1.5em 1.5em',
        minWidth: 'calc(16em + 7vw)'
      }}
      > 
        <CardMedia
        component='img'
        alt="works"
        image={image}
        sx={{
          borderTopLeftRadius: 'inherit',
          '&:hover' : {
            opacity: '0.7',
            transition: '0.3s',
          }
        }}
        />
        <Typography
        color="white"
        fontWeight={500}
        fontFamily="Poppins"
        display="flex"
        alignItems='center'
        width='100%'
        boxSizing='border-box'
        pl={2} pr={2}
        sx={{
          position: 'absolute',
          bottom: '0',
          minHeight: '30%',
          backgroundColor: 'rgba(122, 102, 204, 0.7)',
          borderBottomRightRadius: 'inherit',
          fontSize: 'calc(0.7em + 0.3vw)'
        }}
        >
          {title}<br/>{title2}
        </Typography>
      </CardActionArea>
    </Grid>
  )
}

export default NewsPost;