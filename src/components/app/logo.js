import React from "react"
import { CardMedia } from "@mui/material";

export default function Logo ({ key, image }) {
  return (
    <CardMedia
    key={'Logo' + key}
    component='img'
    loading='lazy'
    alt='Logo'
    width={233}
    height='auto'
    image={image}
    />
  )
}