import React from "react"
import { Grid, Typography } from "@mui/material";

const Management = ({ Managment, Email }) => {
  return (
    <>
      <Grid item
      xl={5.65} lg={5.5} md={5.4} sm={5.1} xs={12}
      textAlign={{ sm: 'end', xs: 'center' }}
      >
        <Typography
        fontFamily='Poppins'
        fontSize='calc(0.8em + 0.2vw)'
        color='white'
        >
          ARTIST MANAGEMENT:
        </Typography>

        <Typography
        fontFamily='Poppins'
        fontSize='calc(0.8em + 0.2vw)'
        color='white'
        display={{ sm: 'block', xs: 'none' }}
        >
          EMAIL:
        </Typography>

      </Grid>

      <Grid item 
      flexGrow={1}
      textAlign={{ 
        sm: 'start', xs: 'center' 
      }} 
      >
        <Typography 
        fontFamily='Poppins'
        fontSize='calc(0.8em + 0.2vw)'
        color='white'
        textTransform='uppercase'
        >
          {Managment}
        </Typography>

        <Typography 
        fontFamily='Poppins'
        fontSize='calc(0.8em + 0.2vw)'
        color='white'
        textTransform='uppercase'
        >
          {Email}
        </Typography>

      </Grid>
    </>
  )
}

export default Management