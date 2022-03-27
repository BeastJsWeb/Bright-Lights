import React from "react";
import { Box, Typography } from "@mui/material";

const LastTracks = ({ lastSongs }) => {
  return (
    <>
      {lastSongs.map((song, key) => (
      <Box 
      key={song + key}
      display='inline-flex' 
      alignItems='baseline' 
      columnGap='calc(0.7em + 0.5vw)' 
      >
        <Typography
        color='silver'
        fontSize='calc(0.8em + 0vw)'
        fontFamily='Poppins'
        >
          0{key + 1}
        </Typography>
        <Typography
        color='white'
        fontSize='calc(0.8em + 0.25vw)'
        lineHeight='27px'
        fontFamily='Poppins'
        minWidth='calc(15em + 4vw)'
        sx={{ 
          paddingBottom: 'calc(0.5em + 0.6vw)',
          '&:hover' : {
            color: '#7A76CC',
            cursor: 'pointer'
          },
          '&:active' : {
            color: '#7A66CC',
            fontWeight: 600
          }
        }}
        >
          {song}
        </Typography>
      </Box>
      ))}
    </>
  )
}

export default LastTracks