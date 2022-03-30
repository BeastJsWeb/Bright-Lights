import React from "react";
import { CardMedia } from '@mui/material';



const Bground = ({ img }) => {
  return (
    <CardMedia
    component='img'
    loading='eager'
    image={img}
    width='calc(1em + 1vw)'
    height='auto'
    alt="bg"
    sx={{
      minWidth: '320px',
      top: '0',
      left: '0', 
      position: 'absolute', 
      zIndex: -1
    }}
    />
  )
}

export default Bground;