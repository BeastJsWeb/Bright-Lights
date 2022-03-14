import React from "react";
import Hashtag from "./hashtag";
import { Grid, Stack, Typography } from "@mui/material";

const AboutSongText = ({ titleIcon, title, textAboutSong, iconAboutSong, iconTitleAboutSong }) => {
  return (
    <Grid item 
    lg={6} xs={12}
    >
      <Stack direction='row' spacing={4}>
        <img
        alt="about"
        src={titleIcon}
        />
        <Typography
        color='white'
        fontFamily='Poppins'
        fontWeight={700}
        sx={{fontSize: 'calc(1em + 1.6vw)'}}
        >
          {title}
        </Typography>
      </Stack>

      <Typography
      color='white'
      sx={{
        fontFamily: 'Poppins',
        opacity: '0.7', 
        marginTop: 'calc(1em + 2.5vw)', 
        marginBottom: 'calc(1em + 2.2vw)',
        marginRight: {
          lg: '20px',
          xs: '0'
        }
      }}
      >
        {textAboutSong}
      </Typography>

      <Grid 
      container 
      lg={12} xs={12} 
      spacing={4}
      >
      <Hashtag
      iconAboutSong={iconAboutSong}
      iconTitleAboutSong={iconTitleAboutSong}
      />
      </Grid>
    </Grid>
  )
}

export default AboutSongText;