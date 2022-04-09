import React from "react";
import { CardMedia } from '@mui/material';

const Bground = ({ mobile, web, jpg }) => {
  return (
    <CardMedia
    component='img'
    loading='eager'
    image={mobile}
    srcSet={`
      ${mobile} 320w,
      ${mobile} 640w, 
      ${web} 2560w, 
      ${jpg}
    `}
    width={1920}
    height={1000}
    alt="bg"
    sx={{
      minWidth: '320px',
      width: '100%',
      height: 'auto',
      top: '0',
      left: '0', 
      position: 'absolute', 
      zIndex: -1
    }}
    />
  )
}

export default Bground;