import React, { Component } from "react"
import { Box } from "@mui/material"
import group501 from '../../images/group5/01.webp'
import group501jpg from '../../images/group5/01.jpg'
import group502 from '../../images/group5/02.webp'
import group502jpg from '../../images/group5/02.jpg'
import group503 from '../../images/group5/03.webp'
import group503jpg from '../../images/group5/03.jpg'
import TourCard from "./tourCard"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from './arrowsStyle'

const toursData = [
  { 
    location: 'Chandler, AZ', 
    label: 'The Park at Wild Horse Pass',
    date: 'APR 02 2021',
    image: group501,
    jpg: group501jpg
  },

  { 
    location: 'Ibiza, IBZ', 
    label: 'Swag Ibiza Club',
    date: 'JUL 08 2021',
    image: group502,
    jpg: group502jpg
  },

  { 
    location: 'Ibiza, IBZ', 
    label: 'El Swing Ibiza',
    date: 'JUL 10 2021',
    image: group503,
    jpg: group503jpg
  },

  { 
    location: 'Chandler, AZ', 
    label: 'Swag Club',
    date: 'JUL 08 2022',
    image: group502,
    jpg: group502jpg
  }
]


export default class Tours extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      arrows: true,
      swipeToSlide: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            speed: 0,
            swipe: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            fade:true,
            swipeToSlide: false
            
          }
        }
      ]
    }

    return (
      <Box
      className="Section"
      id='Tours'
      width={{ sm: '103%', xs: '85%' }} 
      ml={{ sm: '-0.9vw', xs: '7%' }} 
      mt='calc(2em + 8vw)' 
      mb='calc(2em + 8vw)'
      >
        <Slider {...settings} >
          {toursData.map(tour => (
            <TourCard {...tour} 
            key={tour.label + tour.date} 
            />
          ))}
        </Slider>
      </Box>
    )
  }
}