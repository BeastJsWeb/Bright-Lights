import React from "react"
import { CardMedia } from "@mui/material";
import useScrollTrigger from '@mui/material/useScrollTrigger';

const handleClick = (event) => {
  const anchor = (event.target.ownerDocument || document).getElementById(
    'back-to-top-anchor'
  )

  if (anchor) {
    anchor.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }
}

export default function Logo ({ key, image }) {
  return (
    <CardMedia
    key={'Logo' + key}
    component='img'
    loading='lazy'
    alt='Logo'
    in={useScrollTrigger}
    onClick={handleClick}
    width={233}
    height={60}
    image={image}
    sx={{
      height: 'auto',
      cursor: 'pointer'
    }}
    />
  )
}