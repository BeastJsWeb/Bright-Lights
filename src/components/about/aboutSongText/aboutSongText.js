import React from "react";
import Hashtag from "./hashtag";
import { Grid, Typography } from "@mui/material";
import TitleAbout from "../../app/titleAbout";

const AboutSongText = ({ titleIcon, title, textAboutSong, iconAboutSong, iconTitleAboutSong }) => {
  return (
    <Grid item container
    lg={6} xs={12}
    >
      <TitleAbout
      titleIcon={titleIcon}
      title={title}
      />
      <Typography
      color='white'
      sx={{
        fontFamily: 'Poppins',
        fontSize: 'calc(0.8em + 0.17vw)',
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

      <Grid container item
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