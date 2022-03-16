import React from "react";
import { Grid } from "@mui/material";
import CardImg from "../app/cardImg";

const AboutSongImg = ({img, maxWidth = '450px'}) => {
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
        <CardImg
        img={img}
        maxWidth={maxWidth}
        />
    </Grid>
  )
}

export default AboutSongImg;