import React, { useEffect, useState } from "react";
import { Slider, Box, IconButton, Typography, Grid } from '@mui/material';
import { PauseRounded, PlayArrowRounded } from '@mui/icons-material';
import { styled } from "@mui/system";

const MySlider = styled(Slider) (() => `
  color: #7A66CC;
  & .MuiSlider-rail {
    color: white;
    opacity: 1;
    
  }
  & .MuiSlider-thumb {
    box-shadow: 0 0 0 0;
    height: calc(1em + 0.3vw);
    width: 2px;
  }
  `
)

const Player = ({ 

  marginBottom = 'calc(1em + 0.8vw)', 
  marginTop = 'calc(1em + 0.5vw)',
  maxWidth,
  lgTimer= 1 ,
  lg = 9.8, xs= 8,
  mr = '-2.5vw',

  tracks

}) => {

  const [audio] =  useState(new Audio(tracks))
  const [paused, setPaused] = useState(false)
  useEffect(() => paused ? audio.play() : audio.pause())

  const duration = 200
  const [position, setPosition] = useState(59)

  function formatDuration(value) {
    const minute = Math.floor(value / 60)
    const secondLeft = value - minute * 60
    return `${minute}:${secondLeft <= 9 ? `0${secondLeft}` : secondLeft}`
  }

  return (
    <>
      <Grid container
      flexGrow={1} 
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: {marginBottom},
        marginTop: {marginTop},
        maxWidth: {maxWidth}
      }}
      >
        <Grid item 
        lg={1}
        ml={-2.5} mr={mr}
        >
          <IconButton 
          aria-label={paused ? 'play' : 'pause'}
          onClick={() => setPaused(!paused)}
          >
            {paused ? (
              <PauseRounded sx={{color: 'white', fontSize: '45px'}} />

            ) : (
              <PlayArrowRounded sx={{color: 'white', fontSize: '45px'}} />

            )}

          </IconButton>

        </Grid>

        <Grid item 
        lg={lg} xs={xs}
        pt={0.4}
        >
          <MySlider
          size="small"
          aria-label="time-indicator"
          value={position}
          min={0}
          max={duration}
          step={1}
          onChange={(_, value) => setPosition(value)}
          />

        </Grid>

        <Grid item 
        width='calc(1.3em + 5.5vw)'
        lg={lgTimer} 
        >
          <Typography
          component='div'
          display='flex'
          color="white"
          fontSize='calc(0.7em + 0.3vw)'
          fontWeight={500}
          fontFamily='Poppins'
          sx={{
            display: {
              xs: 'none', sm: 'flex'
            }
          }}
          >
            <Box width='calc(2.2em)'>
              {formatDuration(position)}
            </Box>
            
            - 
            <Box width='calc(2.2em)'>
              {formatDuration(duration - position)}
            </Box>

          </Typography>

        </Grid>
      </Grid>
    </>
  )
}

export default Player;