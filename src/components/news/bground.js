import React from "react";
import { CardMedia } from '@mui/material';

const Bground = ({ img }) => {
  return (
    <CardMedia
      component='img'
      loading='eager'
      image={img}
      alt="bg"
      sx={{
        width: '100%',
        height: 'auto',
        minWidth: '300px',
        top: '0',
        left: '0', 
        position: 'absolute', 
        zIndex: -1
      }}
      />
  )
}

export default Bground;