import React from "react";
import { Button, CardMedia, IconButton, Typography } from "@mui/material";

const IconsMedia = ({ image, label, width = 30, height = 30 }) => {
  return (
    <Button
    component='span'
    disableTouchRipple
    sx={{
      textTransform: 'none',
      borderRadius: '100%',
      p: 0,
      '&:hover' : {
        background: 'rgba(255,255,255, 0)',
      },
      '&:hover button' : {
        background: 'rgba(255,255,255, 0.1)',
      },
      '&:active button' : {
        background: 'rgba(122,102,204, 0.7)',
      }
    }} 
    >
      <IconButton size="small" >
        <CardMedia
        component='svg'
        alt="svgIcon"
        loading='lazy'
        image={image}
        width={width}
        height={height}
        
        />

      </IconButton>

      <Typography
      color='white'
      fontFamily='Poppins'
      fontWeight={600}
      sx={{ fontSize: "calc(0.7em + 0.2vw)" }}
      >
        {label}
      </Typography>

    </Button>
  )
}

export default IconsMedia