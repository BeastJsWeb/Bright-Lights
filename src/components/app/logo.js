import React from "react"
import { CardMedia } from "@mui/material";

export default function Logo ({ image }) {
  return (
    <CardMedia
    component='img'
    alt='Logo'
    width={233}
    height='auto'
    image={image}
    />
  )
}