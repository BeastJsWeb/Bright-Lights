import React, { Component } from "react";
import { CardMedia, Typography, CardActionArea } from '@mui/material';

export default class CardItem extends Component {
  render() {
    const { 
      key,
      image, 
      title, 
      title2, 
      minWidth,
      maxHeight, 
      maxWidth, 
      minHeight = '30%', 
      backgroundColor = 'rgba(28, 27, 33, 0)',
      justifyContent = 'center',
      color = 'rgba(122, 102, 204, 0)',
      fontSize
    } = this.props

    return (
      <CardActionArea
      key={title + key}
      sx={{
        minWidth: {minWidth},
        '& > *' : {
          borderTopLeftRadius: 'calc(1.5em + 1.7vh)',
          borderBottomRightRadius: 'calc(1.5em + 1.7vh)',
          transition: 'all 0.2s ease 0.05s',
        },
        '&:hover > *' : {
          color: 'rgba(122, 102, 204, 1)',
          backgroundColor: 'rgba(28, 27, 33, 0.7)',
          minHeight: '100%',
          fontWeight: 700,
          borderTopLeftRadius: '45%',
          borderBottomRightRadius: '45%'
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
          borderBottomRightRadius: 'calc(1.5em + 1.7vh)',
          fontSize: {fontSize},
          zIndex: 1,
          '&:hover' : {
            fontSize: 'calc(1em + 0.4vw)',
            borderTopLeftRadius: '44%',
            borderBottomRightRadius: '44%',
          }
        }}
        >
          {title}<br/>{title2}
        </Typography>
        <CardMedia
        component='img'
        loading='lazy'
        alt={title}
        image={image}
        sx={{
          maxHeight: {maxHeight},
          maxWidth: {maxWidth},
          '&:hover' : {
            borderTopLeftRadius: '46%',
            borderBottomRightRadius: '46%'
          }
        }}
        />
      </CardActionArea>
    )
  }
}