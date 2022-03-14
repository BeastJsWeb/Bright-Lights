import React from "react";
import { Grid } from "@mui/material";
import group201 from '../../images/group2/01.svg'
import group202 from '../../images/group2/02.png'
import group203 from '../../images/group2/03.svg'
import AboutSongImg from "./aboutSongImg";
import AboutSongText from "./aboutSongText/aboutSongText";

const iconTitleAboutSong = [
  'Based in: Los Angeles',
  'Founded in 2011',
  'Genre: #DancePop',
  'Label: 333 Recordings'
]

const About = () => {
  return (
    <Grid 
    container lg={12} xs={12}
    display="flex"
    justifyContent='space-between'
    sx={{
      marginTop: 'calc(1em + 9vw)'
    }}
    >
      <AboutSongText
      titleIcon={group201}
      title='Bright Lights'
      textAboutSong={
        <>
          Bright Lights is a multi-Grammy nominated singer, songwriter, DJ 
          and record producer. She has written for numerous 
          pop stars including Britney Spears, Justin Bieber, Usher and
          Beyoncé. Her catalog has amassed over 1 billion streams 
          worldwide. More than 100 million of those streams can be 
          attributed to her artist career and include such hits as Porter 
          Robinson's "Language," 3LAU's "How You Love Me" and her own 
          single "Runaway." She was also a featured vocalist on Zedd's #1 
          Clarity album. Her latest music video, "Put It Down," reached 1 million 
          streams in the first week, releasing independently. Bright Lights is 
          currently in the studio working on a self-produced album slated for 
          release in 2020. 
        </>
      }
      iconAboutSong={group203}
      iconTitleAboutSong={iconTitleAboutSong}
      />
      <AboutSongImg img={group202} />
    </Grid>
  )
}

export default About;