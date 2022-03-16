import React from "react";
import { CardMedia } from "@mui/material";

const CardImg = ({img, maxWidth, maxHeight, marginLeft}) => {
  return (
    <CardMedia
    component='img'
    alt="image"
    image={img}
    sx={{
      borderTopLeftRadius: '2em 2em',
      borderBottomRightRadius: '2em 2em',
      maxWidth: {maxWidth},
      maxHeight: {maxHeight},
      marginLeft: {marginLeft}
    }}
    />
  )
}

export default CardImg;
