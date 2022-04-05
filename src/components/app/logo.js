import React from "react"
import { CardMedia } from "@mui/material";

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

export default function Logo ({ image }) {
  return (
    <CardMedia
    component='img'
    loading='lazy'
    alt='Logo'
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