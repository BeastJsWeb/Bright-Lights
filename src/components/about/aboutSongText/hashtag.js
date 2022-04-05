import React from "react";
import { Grid, Typography } from "@mui/material";

const Hashtag = ({ iconAboutSong, iconTitleAboutSong }) => {
  return (
    <>
      {iconTitleAboutSong.map(iconTitle => (
        <Grid 
        item lg={6} xs={6} 
        key={iconTitle}
        display='flex' 
        >
          <img
          alt="about"
          src={iconAboutSong}
          width={30}
          height={30}
          />
          <Typography
          color='white'
          fontWeight={600}
          fontFamily='Poppins'
          sx={{
            fontSize: 'calc(0.7em + 0.3vw)', 
            marginLeft: 'calc(0.7em + 0.7vw)'
          }}
          >
            {iconTitle}
          </Typography>
        </Grid>
      ))}
    </>
  )
}

export default Hashtag