import React from "react"
import { 
  Card, 
  CardActionArea, 
  CardMedia, 
  CardContent, 
  Typography, 
  Button, 
  Stack 
} from "@mui/material"

const TourCard = ({ image, jpg, location, label, date }) => {
  return (
    <Card
    sx={{ 
      mr: '0.8vw', ml: '0.8vw',
      borderTopLeftRadius: 'calc(1.8em + 1.7vw)',
      borderBottomRightRadius: 'calc(1.8em + 1.7vw)',
      backgroundColor: '#2F2B2B',
      '& *' : {
        borderTopLeftRadius: 'calc(1.8em + 1.7vw)',
        borderBottomRightRadius: 'calc(1.8em + 1.7vw)',
        color: 'white'
      }
    }}
    >
      <CardActionArea >
        <CardMedia
        component="img"
        loading='lazy'
        height={280}
        width={350}
        image={image}
        srcSet={` 
          ${image} 320w, 
          ${image} 1024w,
          ${image} 2560w, 
          ${jpg}
        `}
        alt={label}
        sx={{
          height: 'auto'
        }}
        />
        <CardContent sx={{
          margin: 'calc(0.3em + 0.3vw)', 
          pl: 'calc(0.5em + 1vw)' 
        }} 
        >
          <Typography 
          gutterBottom
          fontFamily='Poppins'
          fontWeight={700}
          fontSize='calc(1em + 0.2vw)'
          pb='3%' pt='1.5%'
          sx={{opacity: 0.5}}
          >
            {location}
          </Typography>
          <Typography 
          gutterBottom
          fontFamily='Poppins'
          fontWeight={500}
          fontSize='calc(1em + 0.2vw)'
          textOverflow='ellipsis'
          whiteSpace='nowrap'
          overflow='hidden'
          borderRadius={0}
          >
            {label}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Stack 
      direction='row'
      flexGrow={1} 
      alignItems='center'
      textAlign='center'
      >
        <Typography
        fontFamily='Poppins'
        sx={{opacity: 0.5 }}
        width='50%'
        fontWeight={700}
        fontSize='calc(0.7em + 0.2vw)'
        >
          {date}
        </Typography>
        <Button
        variant="span"
        sx={{
          width: '50%',
          fontFamily:'Poppins', 
          backgroundColor: '#7A66CC',
          p: '1rem',
          fontWeight: 700,
          fontSize: 'calc(0.7em + 0.2vw)',
          borderTopLeftRadius: 'calc(1.8em + 1.7vw)',
          '&:hover' : {
            backgroundColor: '#7A66CC',
            color: 'transparent'
          },
          '&:before' : {
            content: "''",
            position: 'absolute',
            bottom: -15,
            left: 0,
            width: 0,
            height: '100%',
            background: 'rgba(255,255,255,0)',
            opacity: 0,
            transition: 'all 0.5s ease',
            borderTopLeftRadius: 'calc(1.8em + 1.7vw)',
            color: 'transparent',
            alignItems: 'center'
          },
          '&:hover:before' : {
            width: '100%',
            background: 'rgba(255,255,255,0.3)',
            content: "'BUY'",
            color: 'white',
            fontSize: '1em',
            pt: 2,
            opacity: 1,
          }
        }}
        >
          TICKETS
        </Button>
      </Stack>
    </Card>
  )
}

export default TourCard