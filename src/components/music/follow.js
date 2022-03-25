import React from "react";
import { Stack, Typography } from "@mui/material";
import IconsMedia from "../app/iconsMedia";

const FollowUs = ({ musicServiсes }) => {
  return (
    <>
      <Typography
      color='white'
      fontFamily='Poppins'
      fontWeight={600}
      lineHeight='36px'
      sx={{fontSize: 'calc(1em + 0.4vw)'}}
      >
        Follow me:
      </Typography>
      <Stack container 
      direction='row' 
      alignItems='center'
      spacing={{ lg: 3, sm: 3, xs: 5 }} 
      ml='calc(0.3em + 1.8vw)'
      >

        {musicServiсes.map(service => (
          <IconsMedia {...service} />
          
        ))}
      </Stack>
    </>
  ) 
}

export default FollowUs