import React, { Component } from "react";
import { CardMedia, Typography, CardActionArea } from '@mui/material';

export default class CardItem extends Component {
  render() {
    const { 
      image, jpg,
      title, 
      title2, 
      minWidth,
      maxHeight, 
      maxWidth, 
      minHeight = '100%', 
      backgroundColor = 'rgba(28, 27, 33, 0)',
      justifyContent = 'center',
      color = 'rgba(122, 102, 204, 0)',
      fontSize
    } = this.props

    return (
      
      <CardActionArea 
      sx={{
        minWidth: {minWidth},
        '& > *' : {
          borderTopLeftRadius: '15%',
          borderBottomRightRadius: '15%',
          transition: { 
            md: 'all 0.2s ease 0.05s', 
            xs: 'none' 
          },
        },
        '&:hover > *' : {
          color: 'rgba(122, 102, 204, 1)',
          backgroundColor: 'rgba(28, 27, 33, 0.7)',
          minHeight: {
            md: '100%',
            xs: 'none'
          },
          fontWeight: 700,
          borderTopLeftRadius: '15%',
          borderBottomRightRadius: '15%'
        }
      }}
      >
        <Typography
        color={color}
        fontWeight={500}
        fontFamily="Poppins"
        display='flex'
        alignItems='center'
        justifyContent={justifyContent}
        width='100%'
        boxSizing='border-box'
        pl={2} pr={2}
        sx={{
          position: 'absolute',
          bottom: '0',
          minHeight: {minHeight},
          backgroundColor: {backgroundColor},
          borderTopLeftRadius: '0em',
          borderBottomRightRadius: 'calc(3.2em)',
          fontSize: {fontSize},
          zIndex: 1,
          '&:hover' : {
            fontSize: {
              md: 'calc(1em + 0.4vw)',
              xs: 'none'
            },
            borderTopLeftRadius: '14%',
            borderBottomRightRadius: '14%',
          }
        }}
        >
          {title}<br/>{title2}

        </Typography>

        <CardMedia
        component='img'
        loading='lazy'
        width={350}
        height={300}
        alt={title}
        image={image}
        srcSet={` 
          ${image} 320w, 
          ${image} 2560w, 
          ${jpg}
        `}
        sx={{
          height: 'auto',
          maxHeight: {maxHeight},
          maxWidth: {maxWidth},
          '&:hover' : {
            borderTopLeftRadius: '16%',
            borderBottomRightRadius: '16%'
          }
        }}
        />

      </CardActionArea>
    )
  }
}