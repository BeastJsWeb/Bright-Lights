import React from "react";
import { Stack, Typography, CardMedia } from "@mui/material";

const TitleAbout = ({ 
  titleIcon,  
  title, 
  fontSize = 'calc(1em + 1.6vw)', 
  fontWeight = '700',
  spacing = 4
}) => {
  return (
    <Stack direction='row' spacing={spacing} alignItems='center' >
      <CardMedia
      component='svg'
      loading='lazy'
      alt="about"
      image={titleIcon}
      width={64}
      height={30}
      sx={{
        height: 'auto'
      }}
      />
      <Typography
      color='white'
      fontFamily='Poppins'
      fontWeight={fontWeight}
      sx={{fontSize: {fontSize}}}
      >
        {title}
      </Typography>
    </Stack>
  )
}

export default TitleAbout