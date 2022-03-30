import React from "react";
import { CardMedia } from '@mui/material';

const Bground = ({ img, imgM, imgR }) => {
  return (
    <CardMedia
    component='img'
    loading='eager'
    srcSet={`
      ${imgM} 640w, 
      ${img} 2560w, 
      ${imgR}
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