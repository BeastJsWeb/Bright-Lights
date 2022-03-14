import React from "react";
//import song from './01.mp3'
import { Slider, Box, IconButton, Typography } from '@mui/material';
import { PauseRounded, PlayArrowRounded } from '@mui/icons-material';
import { styled } from "@mui/system";

const MySlider = styled(Slider) (() => `
  color: #7A66CC;
  width: calc(7em + 40vw);

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

const Player = () => {
  const [paused, setPaused] = React.useState(false); 

  return (
    <>
      <Box 
        ml={-2.5} 
        sx={{
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: 'calc(1em + 5vw)',
          marginTop: 'calc(1em + 0.5vw)'
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
          fontSize='calc(1em + 0.2vw)'
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