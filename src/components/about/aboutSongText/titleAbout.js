import React from "react";
import { Stack, Typography } from "@mui/material";

const TitleAbout = ({ 
  titleIcon, 
  widthIcon, 
  heightIcon, 
  title, 
  fontSize = 'calc(1em + 1.6vw)', 
  fontWeight = '700',
  spacing = 4
}) => {
  return (
    <Stack direction='row' spacing={spacing} alignItems='center' >
      <img
      loading='lazy'
      alt="about"
      src={titleIcon}
      width={widthIcon}
      height={heightIcon}
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