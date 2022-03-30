import React from "react";
import { Grid, CardMedia } from "@mui/material";
import group301 from '../../images/group3/01.webp'
import TitleAbout from "../app/titleAbout";
import group201 from '../../images/group2/01.svg'
import Player from "../news/player";
import group302 from '../../images/group3/01.svg'
import group303 from '../../images/group3/02.svg'
import FollowUs from "./follow";
import LastTracks from "./lastTracks";

const lastSongs = [
  '3LAU, Bright Lights — How You Love Me',
  'Bright Lights, Kaleena Zanders, Kandy — War For Love',
  'Pink Is Punk, Benny Benassi, Bright Lights — Ghost',
  'Hardwell, Dyro, Bright Lights — Never Say Goodbye',
  'Zeds Dead, Dirtyphonics, Bright Lights — Where Are You Now',
  'Zedd, Bright Lights — Follow You Down'
]

const musicServiсes = [
  { label: 'spotify', image: group302 },
  { label: 'iTunes', image: group303 }
]

const Music = () => {
  return (
    <Grid container
    alignItems="center"
    mt='calc(11.5em + 4vw)'
    >

      <Grid item
      lg={6} xs={12}
      pr={{ lg: 6, xs: 0 }} 
      mt={{
        lg: 0, 
        sm: 'calc(0.1em + 8vw)', 
        xs: 'calc(0.1em + 9vw)'
      }}
      >

        <CardMedia
        component='img'
        loading='lazy'
        alt={group301}
        image={group301}
        width={510}
        height={510}
        sx={{ 
          borderRadius:'100%',
          maxWidth: '510px',
          height: 'auto'
        }}
        />

      </Grid>
      <Grid item
      lg={6} xs={12}
      mt={{ lg: 0, xs: 'calc(0.1em + 10vw)' }}
      pl={{lg: 1, xs: 0 }}
      >

        <Grid container
        direction="column"
        >

          <Grid item
          lg={2} xs={2}
          >

            <TitleAbout
            titleIcon={group201}
            title='Last tracks'
            />
          </Grid>
          <Grid item
          lg={2} xs={2}
          mt='calc(0.1em + 0.8vw)'
          >

            <Player/>
          </Grid>
          <Grid item
          mb='calc(0.1em + 1.5vw)'
          >

            <LastTracks lastSongs={lastSongs} />
          </Grid>
          <Grid item container
          lg={2} xs={2}
          >

            <FollowUs
            musicServiсes={musicServiсes}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Music