import React from "react";
import { CardMedia, Grid } from "@mui/material";

const AboutSongImg = ({img}) => {
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
        alt="about"
        image={img}
        sx={{
          borderTopLeftRadius: '1.5em 1.5em',
          maxWidth: '450px'
        }}
        />
      </Grid>
  )
}

export default AboutSongImg;