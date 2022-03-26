import React from "react";
import Player from "./player";
import Bground from "./bground";
import Title from "./title";
import CardItem from "../app/CardItem";
import { Grid } from '@mui/material';
import BGimage from '../../images/01.webp';
import group101 from '../../images/group1/01.webp';
import group102 from '../../images/group1/02.webp';
import group103 from '../../images/group1/03.webp';

const news = [
  { 
    image: group101, 
    title: 'Working on my upcoming full-lenth album that`s releasing later this year.' 
  },
  { 
    image: group102, 
    title: 'Halloween vibes.', 
    title2: 'Listen my new track!' 
  },
  { 
    image: group103, 
    title: 'WarForLove is OUT NOW!!', 
    title2: 'Stream it here!' 
  },
]

const News = () => {
  return (
    <>
      <Bground
      img={ new Image().src =  BGimage }
      />
      <Title
      mainTitle='War For Love'
      subTitle='New Single'
      />
      <Player 
      width='calc(7em + 40vw)'
      marginBottom='calc(1em + 5vw)'
      />
      <Grid container
      overflow='hidden'
      >
        <Grid container
        overflow='auto'
        sx={{
          gap: 'calc(13em + 4.4vw)', 
          flexWrap: 'nowrap'
        }}
        >
         {news.map(post => (
           <Grid item lg={1} md={1} xs={1} >
           <CardItem 
             {...post}
             minWidth='calc(16em + 7vw)'
             backgroundColor='rgba(122, 102, 204, 0.7)'
             justifyContent='start'
             color='white'
             fontWeight={500}
             fontSize='calc(0.7em + 0.3vw)'
             />
          </Grid>
         ))}
         
        </Grid>
      </Grid>
  </>
  )
}

export default News;