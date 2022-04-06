import React from "react";
import { Grid, Typography, CardMedia, Box } from "@mui/material";

const AboutArtist = ({
  textAboutArtist, 
  linkSiteText, 
  img, jpg, 
  bgImg, bgJpg 
}) => {
  return (
    <>
      <Box minHeight={500} >
        <Grid container
        mt='calc(1em + 11.5vw)'
        pb='calc(1em + 1.6vw)'
        pt='calc(1em + 1.6vw)'
        border='1px solid #FFFFFF'
        alignItems='center'
        maxHeight='calc(18em + 1vw)'
        sx={{
          borderTopLeftRadius: '2em 2em',
          borderBottomRightRadius: '2em 2em',
        }}
        >
          <Grid item
          lg={7} xs={12}
          pr={{ lg: '4.5vw', xs: '20px'}}
          pl={{ lg: '80px', xs: '20px'}}
          mt={{ lg: 'calc(0.1em - 6.5vw)', xs: 0 }}
          rowGap='calc(0.5em + 0.8vw)'
          >
            <Typography
            color='white'
            fontSize='calc(0.8em + 0.2vw)'
            lineHeight='27px'
            fontFamily='Poppins'
            minWidth='calc(15em + 4vw)'
            sx={{ paddingBottom: 'calc(0.5em + 0.8vw)' }}
            >
              <CardMedia
              component='img'
              loading='lazy'
              alt="image"
              image={bgImg}
              srcSet={` 
                ${bgImg} 320w, 
                ${bgImg} 2560w, 
                ${bgJpg}
              `}
              sx={{
                position: 'absolute',
                maxWidth: '100px',
                maxHeight: '100px',
                zIndex: -1,
              }}
              />

              {textAboutArtist}

            </Typography>

            <Typography
            component='div'
            color='#7A66CC'
            fontSize='calc(0.8em + 0.25vw)'
            fontWeight={700}
            borderTop='1px solid silver'
            fontFamily='Poppins'
            pt='calc(0.5em + 0.8vw)'
            >
              <Box 
              display='inline' 
              sx={{
                cursor: 'pointer',
                '&:hover' : {
                  color: '#7A76CC'
                }
              }} 
              >
                {linkSiteText}

              </Box>

            </Typography>

          </Grid>

          <Grid item
          lg={4} xs={12}
          mt={{ lg: 'calc(0.1em - 6.5vw)', xs: '10px' }}
          >
            <CardMedia
            component='img'
            loading='lazy'
            width={370}
            height={470}
            alt="artistPhoto"
            image={img}
            srcSet={` 
              ${img} 320w, 
              ${img} 2560w, 
              ${jpg}
            `}
            sx={{
              height: 'auto',
              zIndex: 1,
              borderTopLeftRadius: '2em 2em',
              borderBottomRightRadius: '2em 2em',
              width: 'calc(15em + 6vw)',
              ml: 2
            }}
            />

          </Grid>

        </Grid>
      </Box>
    </>
  )
}

export default AboutArtist