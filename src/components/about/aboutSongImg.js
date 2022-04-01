import React from "react";
import { Grid, CardMedia } from "@mui/material";

const AboutSongImg = ({ img, jpg }) => {
  return (
    <Grid 
      item lg={6} xs={12}
      display='flex' 
      alignItems='center'
      sx={{
        marginTop: 'calc(1em + 2.2vw)',
        justifyContent: {
          lg: 'flex-end',
          xs: 'center'
        }
      }}
      >
        <CardMedia
        component='img'
        alt="aboutSong"
        loading='lazy'
        width={450}
        height={466}
        image={img}
        srcSet={` 
          ${img} 320w, 
          ${img} 2560w, 
          ${jpg} 
        `}
        sx={{
          borderTopLeftRadius: '2em 2em',
          borderBottomRightRadius: '2em 2em',
          maxWidth: '450px',
          height: 'auto'
        }}
        />
    </Grid>
  )
}

export default AboutSongImg;