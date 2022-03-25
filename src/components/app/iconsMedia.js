import React from "react";
import { Button, CardMedia, IconButton, Typography } from "@mui/material";

const IconsMedia = ({ image, label, width = 30, height = 30 }) => {
  return (
    <Button 
    variant="span" 
    disableTouchRipple
    sx={{
      textTransform: 'none',
      p: 0,
      '&:hover :nth-child(1)' : {
        background: 'rgba(255,255,255, 0.1)',
        transition: '0.3s',
        borderRadius: '100%'
      },
      '&:active :nth-child(1)' : {
        background: 'rgba(122,102,204, 0.7)',
      }
    }} 
    >

      <IconButton size="small" >
        <CardMedia
        component='svg'
        alt="svgIcon"
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