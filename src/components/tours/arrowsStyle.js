import React from "react"
import { CardMedia } from "@mui/material"
import left from '../../images/group5/left.svg'
import right from '../../images/group5/right.svg'

export function SampleNextArrow({ className, style, onClick }) {
  return (
    <CardMedia
    component='svg'
    alt="right"
    image={right}
    width={40}
    height={60}
    className={className}
    style={{ ...style, 
      width:'40px', 
      height: '60px', 
      marginRight: 'calc(1em - 2vw)' 
    }}
    sx={{
      opacity: 0.7,
      '&:hover' : {
        opacity: 1
      }
    }}
    onClick={onClick}
    />
  )
}

export function SamplePrevArrow({ className, style, onClick }) {
  return (
    <CardMedia
    component='svg'
    alt="left"
    image={left}
    width={40}
    height={60}
    className={className}
    style={{ ...style, 
      width:'40px', 
      height: '60px', 
      marginLeft: 'calc(1em - 2vw)' 
    }}
    sx={{
      opacity: 0.7,
      '&:hover' : {
        opacity: 1
      }
    }}
    onClick={onClick}
    />
  )
}
