import React from "react";
//import song from './01.mp3'
import { Slider, Box, IconButton, Typography } from '@mui/material';
import { PauseRounded, PlayArrowRounded } from '@mui/icons-material';
import { styled } from "@mui/system";

const MySlider = styled(Slider) (({width}) => `
  color: #7A66CC;
  width: ${width};

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

const Player = ({ width, marginBottom = 'calc(1em + 0.8vw)', marginTop = 'calc(1em + 0.5vw)' }) => {
  const [paused, setPaused] = React.useState(false); 

  return (
    <>
      <Box 
        ml={-2.5} 
        sx={{
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: {marginBottom},
          marginTop: {marginTop}
        }}
        >
        <IconButton 
        aria-label={paused ? 'play' : 'pause'}
        onClick={() => setPaused(!paused)}
        >
          {paused ? (
            <PauseRounded sx={{color: 'white', fontSize: '45px'}}/>
          ) : (
          <PlayArrowRounded sx={{color: 'white', fontSize: '45px'}}/>
          )}
        </IconButton>
        <MySlider
          size="small"
          width={width}
          aria-label="time-indicator"
          min={0}
          step={1}
          
        />
        <Typography
          sx={{
            marginLeft: 'calc(1em + 0.1vw)',
            display: {
              xs: 'none', sm: 'flex'
            }
          }}
          display='flex'
          gap={1}
          color="white"
          fontSize='calc(0.7em + 0.3vw)'
          fontWeight={500}
          fontFamily='Poppins'
          >
            <Box>00:00</Box>
            -
            <Box>02:54</Box>
        </Typography>
      </Box>
    </>
  )
}

export default Player;