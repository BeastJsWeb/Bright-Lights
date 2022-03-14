import React from "react";
import { Typography } from '@mui/material';

const Title = ({mainTitle, subTitle}) => {
  return (
    <>
      <Typography
      color="white"
      mt='calc(1em + 14vw)'
      textAlign="left"
      fontSize='calc(1em + 2vw)'
      fontWeight={700}
      fontFamily='Poppins'
      >
        {subTitle}
      </Typography>

      <Typography
      textAlign="left"
      fontSize='calc(1em + 4.4vw)'
      fontWeight={700}
      fontFamily='Poppins'
      lineHeight='calc(1em + 4vw)'
      sx={{
        color: 'rgba(0,0,0,0.0)', 
        WebkitTextStroke: '0.7px white'
      }}
      >
        {mainTitle}
      </Typography>
    </>
  )
}

export default Title;